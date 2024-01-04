import type { Database } from 'types/supabase'

export type Audit = Database['public']['Tables']['audits']['Row']
export type Axe = Database['public']['Tables']['axe']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type ProfileProjectKeys =
  Database['public']['Tables']['profile_project']['Row'][]

export interface ExtendedAudit extends Audit {
  projects: {
    name: string
  }
  profiles: {
    username: string
    full_name: string
  }
  axe: {
    id: number
    errors: {
      name: string
      message: string
      stack: string
      codeFrame: {
        line: number
        column: number
        originalFile: string
        relativeFile: string
        absoluteFile: string
        frame: string
        language: string
      }
      url: string
    }[]
  }[]
}
