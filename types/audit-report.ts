import type { AuditInfo, AutomaticTestGroupedNodes } from 'types/audit'

export interface ManualTestResult {
  pageName: string
  issues: string
  recommendedFixes: string
}

export interface GroupedResult {
  type: string
  testedElementsCount: number
  automaticTestResults: AutomaticTestGroupedNodes[]
  manualTestResults: ManualTestResult[]
}

export interface PageStatus {
  pageName: string
  status: string
}

export interface Test {
  name: string
  pageStatuses: PageStatus[]
  testedElementsCount: number
  info: AuditInfo
  groupedResults: GroupedResult[]
}

type CategoryName = string

export interface TestedElementsCount {
  total: number
  issues: number
  passes: number
}

export interface AuditReport {
  categories: Record<CategoryName, Test[]>
  testedElementsCount: TestedElementsCount
}
