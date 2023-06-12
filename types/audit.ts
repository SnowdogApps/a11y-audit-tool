interface AxeConfig {
  reporter: string
}

export interface Page {
  selector: string
  url: string
}

interface Viewport {
  height: number
  width: number
}

export interface AuditForm {
  axeConfig: AxeConfig
  basicAuth: {
    password: string
    username: string
  }
  pages: Page[]
  resultsDir: string
  title: string
  viewport: Viewport
  client: number
  auditor: number
}
