import type { User } from '@supabase/gotrue-js'
import type { Database } from 'types/supabase'

export interface UserClaim {
  provider: string
  providers: string[]
  user_role?: 'auditor' | 'viewer'
  claims_admin?: boolean
}

type Profile = Database['public']['Tables']['profiles']['Row']
type Project = Database['public']['Tables']['projects']['Row']
export type ProfileProjectKeys =
  Database['public']['Tables']['profile_project']['Row'][]

export interface ProfileWithEmail extends Profile {
  email: string
}

export interface ProfileProject {
  name: Project['name']
  email: User['email']
}
