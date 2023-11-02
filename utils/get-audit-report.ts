import type { Axe } from 'types/database'
import type {
  AuditReport,
  GroupedResult,
  TestedElementsCount,
  ManualTestResult,
} from 'types/audit-report'
import { getStatus } from '~/utils/get-status'

export const getAuditReport = (axeResults: Axe[]): AuditReport => {
  const route = useRoute()
  const reportType =
    typeof route.query.type === 'string' ? route.query.type : 'review'

  const auditReport: AuditReport = {
    categories: {},
    testedElementsCount: {
      total: 0,
      issues: 0,
      passes: 0,
    },
  }

  axeResults.forEach((axeResult) => {
    const pageName = `${axeResult.results.url}${
      axeResult.selector ? ' | Selector: ' + axeResult.selector : ''
    } | Screen size: ${axeResult.size}`
    const { audit, formData } = useAudit(axeResult)

    audit.value.forEach((test) => {
      const category = test.info['Test Category']
      const name = test.info['Test Name']
      const {
        manualTestResultsStatus,
        manualTestIssues,
        manualTestRecommendedFixes,
      } = formData.value[test.id]
      const status = getStatus({
        automaticTestResultsStatus: test.automaticTestResultsStatus,
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
          info: test.info,
          groupedResults: [],
        }
        auditReport.categories[category] = {
          status: auditReport.categories[category]?.status || 'Passed',
          tests: auditReport.categories[category]?.tests || [],
        }
        auditReport.categories[category].tests.push(relatedTestInAuditReport)
      }

      relatedTestInAuditReport.pageStatuses.push({ pageName, status })

      if (
        !['Passed', 'Not applicable'].includes(status) &&
        auditReport.categories[category].status !== 'Failed'
      ) {
        auditReport.categories[category].status = status
      }

      test.automaticTestGroupedResults.forEach((group) => {
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
          relatedTestInAuditReport?.groupedResults.push(
            relatedTestGroupedResults
          )
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

      let manualTestResultType = 'requires manual tests'
      if (manualTestResultsStatus === 'Failed') {
        manualTestResultType = 'issues'
      } else if (manualTestResultsStatus === 'Passed') {
        manualTestResultType = 'passes'
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
    })
  })

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

  // Sort categories to display categories with status "Failed" first
  const sortedCategories = Object.entries(auditReport.categories)
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

  auditReport.categories = sortedCategories

  return auditReport
}
