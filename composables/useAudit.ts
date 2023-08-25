import { useToast } from 'primevue/usetoast'
import { trustedTests } from '~/data/trustedTests'
import { wcagSuccessCriteria } from '~/data/wcagSuccessCriteria'
import type { Database } from 'types/supabase'
import type { SupabaseError } from '~/plugins/error'

export function useAudit(axeResult?: unknown) {
  const toast = useToast()
  const isSaving = ref(false)
  const results = toValue(axeResult?.results || [])

  const formData = ref(
    trustedTests.reduce((acc, test) => {
      const testId = test['Test ID']
      return {
        ...acc,
        [testId]: {
          status: axeResult?.form_data[testId]?.status || 'Not tested',
          manualTestDesc: axeResult?.form_data[testId]?.manualTestDesc || '',
          recommendationDesc:
            axeResult?.form_data[testId]?.recommendationDesc || '',
        },
      }
    }, {})
  )

  const updateField = ({ id, field, value }) => {
    formData.value[id][field] = value
  }

  const saveFormData = async () => {
    isSaving.value = true
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
      isSaving.value = false
    }
  }

  const audit = ref({
    wcagCoveredByTrustedTest: {
      name: 'WCAG SCs covered by Trusted Tests',
      tests: [],
    },
    wcagNotCoveredByTrustedTest: {
      name: 'WCAG SCs not covered by Trusted Tests',
      tests: [],
    },
    axeAdditional: {
      name: 'Axe additional',
      tests: [],
    },
  })

  const regexpAxe = /^wcag/
  let flattedResults = []
  let coveredWCAGsWithTrustedTest = []
  let wcagNotCoverWithTrustedTests = []

  const flattenAxeResults = (results) => {
    const inapplicableResults = getResultsByType(results, 'inapplicable')
    const incompleteResults = getResultsByType(results, 'incomplete')
    const passesResults = getResultsByType(results, 'passes')
    const violationsResults = getResultsByType(results, 'violations')

    inapplicableResults.forEach((item) =>
      flattedResults.push({
        ...transformAxeResultData(item),
        type: 'inapplicable',
      })
    )

    incompleteResults.forEach((item) =>
      flattedResults.push({
        ...transformAxeResultData(item),
        type: 'incomplete',
      })
    )

    passesResults.forEach((item) =>
      flattedResults.push({
        ...transformAxeResultData(item),
        type: 'passes',
      })
    )

    violationsResults.forEach((item) =>
      flattedResults.push({
        ...transformAxeResultData(item),
        type: 'violations',
      })
    )

    return flattedResults || []
  }

  const getResultsByType = (results, type) => results[type] || []

  const transformAxeResultData = (results) => {
    const { id, tags, impact, help, description, helpUrl, nodes } = results
    return {
      id,
      tags,
      impact,
      helper: { help, description, helpUrl },
      nodes,
    }
  }

  if (axeResult) {
    flattedResults = flattenAxeResults(results)

    audit.value.wcagCoveredByTrustedTest.tests = trustedTests.map((item) => {
      const results = flattedResults.filter(({ tags }) =>
        tags.includes(`wcag${item['WCAG SC'].replaceAll('.', '')}`)
      )
      return { id: item['Test ID'], info: item, results }
    })

    const coveredWCAGsWithTrustedTestSet = new Set()
    trustedTests.forEach((test) => {
      const wcag = test['WCAG SC']
      if (wcag !== 'Requirements') {
        coveredWCAGsWithTrustedTestSet.add(wcag)
      }
    })

    coveredWCAGsWithTrustedTest = [...coveredWCAGsWithTrustedTestSet].sort()

    // wcag not in Trusted Tests
    wcagNotCoverWithTrustedTests = wcagSuccessCriteria.filter(
      (wcag) =>
        ![...coveredWCAGsWithTrustedTest].includes(wcag.ref_id) &&
        wcag.level !== 'AAA'
    )

    // wcag not cover with axe results
    audit.value.wcagNotCoveredByTrustedTest.tests =
      wcagNotCoverWithTrustedTests.map((test) => {
        const axeItem = flattedResults.filter((result) =>
          result.tags.includes(`wcag${test.ref_id.replaceAll('.', '')}`)
        )

        if (axeItem.length) {
          test.axeTests = axeItem
        }
        return { id: test.ref_id, ...test }
      })

    audit.value.axeAdditional.tests = flattedResults.filter(
      (result) => !result.tags.some((item) => regexpAxe.test(item))
    )
  }

  return {
    audit,
    formData,
    isSaving,
    updateField,
    saveFormData,
  }
}
