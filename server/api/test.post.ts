import { defineEventHandler, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'
import type { Database } from 'types/supabase'
import type { UserClaim } from 'types/user'

export default defineEventHandler(async (event) => {
  const { data: claims } = (await serverSupabaseClient<Database>(event).rpc(
    'get_my_claims'
  )) as unknown as { data: UserClaim }

  const isAuditor = claims.user_role === 'auditor'

  if (!isAuditor) {
    throw createError({
      statusMessage: `You do not have access to use "${event.path}" API.`,
    })
  }

  const { pages } = await readBody(event)

  if (!pages) {
    throw createError({
      message: 'Config is missing.',
      statusCode: 422,
    })
  }

  const { glApiToken } = useRuntimeConfig()
  const formData = new FormData()

  formData.append('ref', 'master')
  formData.append('token', glApiToken)
  formData.append('variables[A11Y_PAGES]', JSON.stringify(pages))

  // @note: temporary trigger address
  const resData = await $fetch(
    'https://lab.snowdog.pro/api/v4/projects/3892/trigger/pipeline',
    {
      method: 'post',
      body: formData,
    }
  )

  return resData
})
