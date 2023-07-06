export interface Page {
  selector: string
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
