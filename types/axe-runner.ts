import type { AxeResults, NodeResult, Result } from 'axe-core'
import type { ViewportSize } from 'playwright'

export type TrimmedNodes = Pick<
  NodeResult,
  'html' | 'target' | 'failureSummary'
>

export type TrimmedResults = Omit<AxeResults, 'inapplicable' | 'incomplete'> & {
  passes: Omit<Result, 'nodes'> & { nodes: TrimmedNodes[] }
  violations: Omit<Result, 'nodes'> & { nodes: TrimmedNodes[] }
}

export type ResultError = {
  url: string
  message: string
}

export interface TestResult {
  audit_id: string
  selector: string | null
  end_selector: string | null
  size: string
  results: TrimmedResults | null
  errors?: ResultError[]
}

export type BasicAuth = {
  password: string
  username: string
}

export type Page = {
  selector?: string
  endSelector?: string
  url: string
}

export type Config = {
  basicAuth: BasicAuth
  pages: Page[]
  supbaseKey?: string
  supbaseServiceKey?: string
  supbaseUrl?: string
  viewports: ViewportSize[]
}
