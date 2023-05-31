import {
  serverSupabaseClient,
  serverSupabaseServiceRole,
} from '#supabase/server'

export default defineEventHandler(async (event) => {
  const { data: isAdmin } = await serverSupabaseClient(event).rpc(
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
