import {
  serverSupabaseClient,
  serverSupabaseServiceRole,
} from '#supabase/server'

import type { Database } from 'types/supabase'

export default defineEventHandler(async (event) => {
  const { data: isAdmin } = await serverSupabaseClient<Database>(event).rpc(
    'is_claims_admin'
  )

  if (!isAdmin) {
    return
  }

  const SR = serverSupabaseServiceRole(event)

  const { data, error } = await SR.auth.admin.listUsers()

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
