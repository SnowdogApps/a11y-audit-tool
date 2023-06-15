export interface Page {
  selector: string
  url: string
}

interface Viewport {
  height: number
  width: number
}

export interface AuditConfiguration {
  basicAuth: {
    password: string
    username: string
  }
  pages: Page[]
  title: string
  viewport: Viewport
}
