import type { Result } from 'types/supabase'
import type { auditTemplate } from '~/data/auditTemplate'

export interface Page {
  selector?: string | undefined
  url: string
}

export type Viewport = string | [number, number]

export interface AuditConfiguration {
  basicAuth: {
    password: string
    username: string
  }
  pages: Page[]
  title: string
  viewports: Viewport[]
  noAxe?: boolean
  description?: string
}

export interface AutomaticTestGroupedResult {
  type: string
  results: Result[]
}

export type AuditInfo = (typeof auditTemplate)[0] & { status?: string }

export interface AuditItem {
  id: string
  info: AuditInfo
  automaticTestGroupedResults: AutomaticTestGroupedResult[]
  automaticTestResultsStatus: string
}

export type Audit = AuditItem[]

export interface AutomaticTestGroupedNodes {
  id: string
  description: string
  impact?: string
  groupedNodes: {
    pageName?: string
    nodes: Result['nodes']
  }[]
}

export interface AuditMapValue {
  totalNumberOfAllTests: number
  automaticTestsCount: number
  didAutomaticTestsFail: boolean
}
