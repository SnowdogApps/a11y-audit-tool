import { useToast } from 'primevue/usetoast'
import { trustedTests } from '~/data/trustedTests'
import { categories } from '~/data/categories'
import { wcagSuccessCriteria } from '~/data/wcagSuccessCriteria'
import type { Database } from 'types/supabase'
import type { SupabaseError } from '~/plugins/error'

export function useAudit(axeResult?: unknown) {
  const toast = useToast()
  const isLoading = ref(false)
  const results = toValue(axeResult?.results || [])

  const formData = ref(
    categories.slice().reduce((acc, category) => {
      const categoryId = category.id
      return {
        ...acc,
        [categoryId]: {
          testPass: axeResult?.form_data[categoryId]?.testPass || false,
          manualTestDesc:
            axeResult?.form_data[categoryId]?.manualTestDesc || '',
          recommendationDesc:
            axeResult?.form_data[categoryId]?.recommendationDesc || '',
        },
      }
    }, {})
  )

  const updateField = ({ category, field, value }) => {
    formData.value[category][field] = value
  }

  const saveFormData = async () => {
    isLoading.value = true
    const supabase = useSupabaseClient<Database>()

    try {
      const { data, error } = await supabase
        .from('axe')
        .update({ form_data: formData.value })
        .eq('id', axeResult.id)
        .select()
      if (!error && data?.length === 1) {
        toast.add({
          severity: 'success',
          summary: 'Successfully saved data',
          life: 3000,
        })
      }
    } catch (error) {
      const { $handleError } = useNuxtApp()

      $handleError(error as Error | SupabaseError)
    } finally {
      isLoading.value = false
    }
  }

  const audit = ref({
    wcagCoveredByTrustedTest: {
      name: 'WCAG SCs cover by TT',
      tests: [],
    },
    wcagNotCover: {
      name: 'WCAG SCs not cover',
      tests: [],
    },
    axeAdditional: {
      name: 'Axe additional',
      tests: [],
    },
  })

  const regexpAxe = /^wcag/
  let trustedTestByCategories = []
  let flattedResults = []
  let coveredWCAGsWithTrustedTest = []
  let wcagNotCoverWithTT = []

  const flattenAxeResults = (results) => {
    const inapplicableResults = getResultsByType(results, 'inapplicable')
    const incompleteResults = getResultsByType(results, 'incomplete')
    const passesResults = getResultsByType(results, 'passes')
    const violationsResults = getResultsByType(results, 'violations')

    inapplicableResults.forEach((item) =>
      flattedResults.push({
        ...item,
        type: 'inapplicable',
        url: results.url,
      })
    )

    incompleteResults.forEach((item) =>
      flattedResults.push({
        ...item,
        type: 'incomplete',
        url: results.url,
      })
    )

    passesResults.forEach((item) =>
      flattedResults.push({
        ...item,
        type: 'passes',
        url: results.url,
      })
    )

    violationsResults.forEach((item) =>
      flattedResults.push({
        ...item,
        type: 'violations',
        url: results.url,
      })
    )

    return flattedResults || []
  }

  const getResultsByType = (results, type) => results[type] || []
  const filterTrustedTestsByCategory = (category) =>
    trustedTests.filter((test) => test.Test.trim() === category.name)

  const addTTCriteriaToCategory = (category, test) => {
    if (!category?.wcag508SC) {
      category.wcag508SC = new Set()
    }

    return category.wcag508SC.add(test.CrtID)
  }

  if (axeResult) {
    flattedResults = flattenAxeResults(results)

    trustedTestByCategories = categories.map((category) => {
      const ttItems = filterTrustedTestsByCategory(category)

      if (ttItems.length) {
        ttItems.forEach((test) => {
          addTTCriteriaToCategory(category, test)
        })

        // assign axe to TT test
        category.trustedTests = ttItems.map((ttElem) => {
          const filteredResultsByWcagSC = flattedResults.filter((result) =>
            result.tags.includes(`wcag${ttElem.CrtID.replaceAll('.', '')}`)
          )

          ttElem.filteredResultsByWcagSC = filteredResultsByWcagSC.length
            ? filteredResultsByWcagSC
            : []

          const filteredResultsByTT = flattedResults.filter((result) =>
            result.tags.includes(`TT${ttElem.TestID.toLowerCase()}`)
          )

          ttElem.filteredResultsByTT = filteredResultsByTT.length
            ? filteredResultsByTT
            : []

          return ttElem
        })
      }
      return category
    })

    audit.value.wcagCoveredByTrustedTest.tests = trustedTestByCategories

    const coveredWCAGsWithTrustedTestSet = new Set()
    trustedTestByCategories.forEach((category) => {
      if (
        category?.wcag508SC &&
        ![...category.wcag508SC].includes('Requirements')
      ) {
        for (const wcagNumber of category.wcag508SC) {
          coveredWCAGsWithTrustedTestSet.add(wcagNumber)
        }
      }
    })

    coveredWCAGsWithTrustedTest = [...coveredWCAGsWithTrustedTestSet].sort()

    // wcag not in TT tests
    wcagNotCoverWithTT = wcagSuccessCriteria.filter(
      (wcag) =>
        ![...coveredWCAGsWithTrustedTest].includes(wcag.ref_id) &&
        wcag.level !== 'AAA'
    )

    // wcag not cover with axe results
    audit.value.wcagNotCover.tests = wcagNotCoverWithTT.map((el) => {
      const axeItem = flattedResults.filter((result) =>
        result.tags.includes(`wcag${el.ref_id.replaceAll('.', '')}`)
      )

      if (axeItem.length) {
        el.axeTests = axeItem
      }
      return el
    })

    audit.value.axeAdditional.tests = flattedResults.filter(
      (result) => !result.tags.some((item) => regexpAxe.test(item))
    )
  }

  return {
    audit,
    formData,
    isLoading,
    updateField,
    saveFormData,
  }
}
