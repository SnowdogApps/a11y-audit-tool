export interface Page {
  selector: string | undefined
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
}

interface AuditCategory {
  name: string
  tests: never[]
}

export interface AuditCategories {
  wcagCoveredByTrustedTest: AuditCategory
  wcagNotCoveredByTrustedTest: AuditCategory
  axeAdditional: AuditCategory
}
