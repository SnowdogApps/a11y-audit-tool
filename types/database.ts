import type { Database } from 'types/supabase'

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type ProfileProjectKeys =
  Database['public']['Tables']['profile_project']['Row'][]
