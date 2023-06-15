export interface UserClaim {
  provider: string
  providers: string[]
  user_role?: 'auditor' | 'viewer'
  claims_admin?: boolean
}
