import { ref, toValue } from 'vue'
import { trustedTests } from '~/data/trustedTests'
import { categories } from '~/data/categories'
import { wcagSuccessCriteria } from '~/data/wcagSuccessCriteria'

export function useAudit(axeResults) {
  const results = toValue(axeResults)
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
  let wcagNotTTCoverWithAxe = []
  let axeNotWcag = []

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

  const countResultTypes = () => ({
    inapplicable: results.inapplicable.length,
    incomplete: results.incomplete.length,
    passes: results.passes.length,
    violations: results.violations.length,
  })

  flattedResults = flattenAxeResults(results)

  trustedTestByCategories = categories.map((category) => {
    const ttItems = filterTrustedTestsByCategory(category)

    if (ttItems.length) {
      ttItems.forEach((test) => addTTCriteriaToCategory(category, test))

      // assign axe to TT test
      const trustedTestsWithAxeResults = ttItems.map((ttElem) => {
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

      category.trustedTests = trustedTestsWithAxeResults
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
  wcagNotTTCoverWithAxe = wcagNotCoverWithTT.map((el) => {
    const axeItem = flattedResults.filter((result) =>
      result.tags.includes(`wcag${el.ref_id.replaceAll('.', '')}`)
    )

    if (axeItem.length) {
      el.axeTests = axeItem
    }
    return el
  })

  audit.value.wcagNotCover.tests = wcagNotTTCoverWithAxe

  axeNotWcag = flattedResults.filter(
    (result) => !result.tags.some((item) => regexpAxe.test(item))
  )

  audit.value.axeAdditional.tests = axeNotWcag

  return {
    audit,
    resultTypesCount: countResultTypes(),
  }
}
