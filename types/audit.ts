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

export interface Audit {
  wcagCoveredByTrustedTest: {
    name: string
    tests: never[]
  }
  wcagNotCoveredByTrustedTest: {
    name: string
    tests: never[]
  }
  axeAdditional: {
    name: string
    tests: never[]
  }
}
