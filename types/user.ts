import type { User } from '@supabase/gotrue-js'
import type { Profile, Project } from 'types/database'

export interface UserClaim {
  provider: string
  providers: string[]
  user_role?: 'auditor' | 'viewer'
  claims_admin?: boolean
}

export interface ProfileWithEmail extends Profile {
  email: string
}

export interface ProfileProject {
  name: Project['name']
  email: User['email']
  userId: User['id']
  projectId: Project['id']
  metadata: User['app_metadata']
}

export interface RemoveFromProjectPayload
  extends Pick<ProfileProject, 'userId' | 'projectId'> {}

export interface ProfileProjectMapData {
  projectId?: number
  action?: boolean
  name?: string
  email?: string | undefined
  userId?: string
  role?: User['app_metadata']
}

export interface ProfileProjectMap {
  key?: string
  data?: ProfileProjectMapData
  children?: ProfileProjectMap[]
}
