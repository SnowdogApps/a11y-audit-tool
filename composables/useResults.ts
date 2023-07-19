import { trustedTests } from '~/data/trustedTests'

const getResultsByType = (results, type) => results[type] || []

export const filterTrustedTestsByCategory = (category) =>
  trustedTests.filter((test) => test.Test.trim() === category.name)

export const addTTCriteriaToCategory = (category, test) => {
  if (!category?.wcag508SC) {
    category.wcag508SC = new Set()
  }

  return category.wcag508SC.add(test.CrtID)
}

export const countResultsTypes = (results) => ({
  inapplicable: results.inapplicable.length,
  incomplete: results.incomplete,
  passes: results.passes,
  violations: results.violations,
})

export const flattenAxeResults = (results) => {
  const flattedResults = []

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
