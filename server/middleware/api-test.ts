import { serverSupabaseClient } from '#supabase/server'
import type { Database } from 'types/supabase'
import type { UserClaim } from 'types/user'

export default defineEventHandler(async (event) => {
  // @todo: get path from config
  if (event.path === '/api/test') {
    const { data: claims } = (await serverSupabaseClient<Database>(event).rpc(
      'get_my_claims'
    )) as unknown as { data: UserClaim }

    const isAdmin = claims.claims_admin
    const isAuditor = claims.user_role === 'auditor'

    if (!isAdmin && !isAuditor) {
      throw createError({
        statusMessage: `You do not have access to use ${event.path} API.`,
      })
    }
  }
})
