import type { Axe } from 'types/database'
import type {
  AuditReport,
  GroupedResult,
  TestedElementsCount,
  ManualTestResult,
  Test,
} from 'types/audit-report'
import type { AuditItem } from 'types/audit'
import { getStatus } from '~/utils/get-status'

export const getAuditReport = (
  axeResults: Axe[],
  reportType: string
): AuditReport => {
  const auditReport: AuditReport = {
    categories: {},
    testedElementsCount: {
      total: 0,
      issues: 0,
      passes: 0,
    },
  }

  axeResults.forEach((axeResult) => {
    let pageName = ''
    if (axeResult.results.url) {
      pageName += `URL: ${axeResult.results.url} | `
    }
    if (axeResult.selector) {
      pageName += `Selector: ${axeResult.selector} | `
    }
    pageName += `Screen size / Device: ${axeResult.size}`

    const { audit, formData } = useAudit(axeResult)

    audit.value.forEach((auditItem) => {
      const category = auditItem.info['Test Category']
      const name = auditItem.info['Test Name']
      const {
        manualTestResultsStatus,
        manualTestIssues,
        manualTestRecommendedFixes,
      } = formData.value[auditItem.id]
      const status = getStatus({
        automaticTestResultsStatus: auditItem.automaticTestResultsStatus,
        manualTestResultsStatus,
        reportType,
      })

      let relatedTestInAuditReport = auditReport.categories[
        category
      ]?.tests.find((test) => test.name === name)

      if (!relatedTestInAuditReport) {
        relatedTestInAuditReport = {
          name,
          pageStatuses: [],
          testedElementsCount: 0,
          info: auditItem.info,
          groupedResults: [],
        }
        auditReport.categories[category] = {
          status: auditReport.categories[category]?.status || 'Not applicable',
          tests: [
            ...(auditReport.categories[category]?.tests || []),
            relatedTestInAuditReport,
          ],
        }
      }

      relatedTestInAuditReport.pageStatuses.push({ pageName, status })

      auditReport.categories[category].status = getUpdatedCategoryStatus(
        auditReport.categories[category].status,
        status
      )

      addAutomaticTestResults(auditItem, relatedTestInAuditReport, pageName)
      addManualTestResults(
        manualTestResultsStatus,
        manualTestIssues,
        manualTestRecommendedFixes,
        relatedTestInAuditReport,
        pageName,
        auditReport
      )
    })
  })

  addTestedElementsCount(auditReport)
  moveFailedCategoriesToTop(auditReport)

  return auditReport
}

const getUpdatedCategoryStatus = (
  currentCategoryStatus: string,
  testStatus: string
) => {
  if (
    /*
    Statuses have different importance:
    1. Failed
    2. Not tested
    3. Passed
    4. Not applicable
    "Failed" overwrites all. Not tested overwrites "Not applicable" and "Passed", and so on.
    */
    (testStatus !== 'Not applicable' && currentCategoryStatus !== 'Failed') ||
    (testStatus === 'Passed' && currentCategoryStatus === 'Not applicable')
  ) {
    return testStatus
  }
  return currentCategoryStatus
}

const addAutomaticTestResults = (
  auditItem: AuditItem,
  relatedTestInAuditReport: Test,
  pageName: string
) => {
  auditItem.automaticTestGroupedResults.forEach((group) => {
    let relatedTestGroupedResults =
      relatedTestInAuditReport?.groupedResults.find(
        (statusGroup) => statusGroup.type === group.type
      )

    if (!relatedTestGroupedResults) {
      relatedTestGroupedResults = {
        type: group.type,
        testedElementsCount: 0,
        automaticTestResults: [],
        manualTestResults: [],
      }
      relatedTestInAuditReport?.groupedResults.push(relatedTestGroupedResults)
    }

    group.results.forEach(({ id, description, impact, nodes }) => {
      let relatedAutomaticTestResult =
        relatedTestGroupedResults?.automaticTestResults.find(
          (result) => result.id === id
        )

      if (!relatedAutomaticTestResult) {
        relatedAutomaticTestResult = {
          id,
          description,
          impact,
          groupedNodes: [],
        }
        relatedTestGroupedResults?.automaticTestResults.push(
          relatedAutomaticTestResult
        )
      }

      relatedAutomaticTestResult.groupedNodes.push({ pageName, nodes })
    })
  })
}

const addManualTestResults = (
  manualTestResultsStatus: string,
  manualTestIssues: string,
  manualTestRecommendedFixes: string,
  relatedTestInAuditReport: Test,
  pageName: string,
  auditReport: AuditReport
) => {
  let manualTestResultType = 'requires manual tests'
  if (manualTestResultsStatus === 'Failed') {
    manualTestResultType = 'issues'
    auditReport.testedElementsCount.issues++
  } else if (manualTestResultsStatus === 'Passed') {
    manualTestResultType = 'passes'
    auditReport.testedElementsCount.passes++
  } else if (manualTestResultsStatus === 'Not applicable') {
    manualTestResultType = 'not applicable'
  }

  const manualTestResult: ManualTestResult = {
    pageName,
    issues: manualTestIssues,
    recommendedFixes: manualTestRecommendedFixes,
  }

  const relatedTestGroupedResults =
    relatedTestInAuditReport.groupedResults.find(
      ({ type }) => type === manualTestResultType
    )

  if (relatedTestGroupedResults) {
    relatedTestGroupedResults.manualTestResults.push(manualTestResult)
  } else {
    relatedTestInAuditReport.groupedResults.push({
      type: manualTestResultType,
      testedElementsCount: 0,
      automaticTestResults: [],
      manualTestResults: [manualTestResult],
    })
  }
}

const addTestedElementsCount = (auditReport: AuditReport) => {
  const getResultCount = (group: GroupedResult) =>
    group.automaticTestResults.reduce(
      (acc, result) =>
        acc +
        result.groupedNodes.reduce((acc, group) => acc + group.nodes.length, 0),
      0
    )

  for (const category of Object.values(auditReport.categories)) {
    for (const test of category.tests) {
      let testedElementsCount = 0

      for (const group of test.groupedResults) {
        group.testedElementsCount = getResultCount(group)
        testedElementsCount += group.testedElementsCount

        if (group.type in auditReport.testedElementsCount) {
          auditReport.testedElementsCount[
            group.type as keyof TestedElementsCount
          ] += group.testedElementsCount
        }
      }

      test.testedElementsCount = testedElementsCount
      auditReport.testedElementsCount.total += testedElementsCount
    }
  }
}

const moveFailedCategoriesToTop = (auditReport: AuditReport) => {
  auditReport.categories = Object.entries(auditReport.categories)
    .sort(([, categoryA], [, categoryB]) => {
      const hasFailedA = categoryA.status === 'Failed'
      const hasFailedB = categoryB.status === 'Failed'

      if (hasFailedA && !hasFailedB) {
        return -1 // Move categoryA to the front
      } else if (!hasFailedA && hasFailedB) {
        return 1 // Move categoryB to the front
      }
      return 0 // No change in order
    })
    .reduce((result, [categoryName, category]) => {
      result[categoryName] = category
      return result
    }, {} as AuditReport['categories'])
}
