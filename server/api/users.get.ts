import { serverSupabaseUser, serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const serverUser = await serverSupabaseUser(event)

  if (!serverUser?.app_metadata.claims_admin) {
    return
  }

  const SR = serverSupabaseServiceRole(event)

  const { data, error } = await SR.auth.admin.listUsers()

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
