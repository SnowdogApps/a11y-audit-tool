export interface AuthUser {
  email: string
  password: string
}

export type UserType = 'viewer' | 'auditor'

export interface UserProfile {
  id: string
  updated_at: Date | string
  username: string
  full_name: string
  avatar_url: string
  user_type: UserType
}
