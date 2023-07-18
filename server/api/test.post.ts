import { defineEventHandler, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'
import type { Database } from 'types/supabase'
import type { Audit } from 'types/database'
import type { UserClaim } from 'types/user'
import type { AuditConfiguration } from 'types/audit'

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

  const body = await readBody<Audit>(event)

  if (!body?.config) {
    throw createError({
      message: 'Config is missing.',
      statusCode: 422,
    })
  }

  const { basicAuthUser, basicAuthPassed, multiverseApiUrl } =
    useRuntimeConfig().public
  const config = body.config as unknown as AuditConfiguration
  const formData = new FormData()
  const headers: { Authorization?: string } = {}

  if (basicAuthUser && basicAuthPassed) {
    headers.Authorization = `Basic ${Buffer.from(
      `${basicAuthUser}:${basicAuthPassed}`
    ).toString('base64')}`
  }

  formData.append('variables[A11Y_AUDIT_ID]', String(body.id))
  formData.append('variables[A11Y_PAGES]', JSON.stringify(config.pages))
  formData.append('variables[A11Y_VIEWPORTS]', JSON.stringify(config.viewports))
  formData.append(
    'variables[A11Y_BASIC_AUTH]',
    JSON.stringify(config.basicAuth)
  )
  formData.append('parallel', String(config.viewports.length))

  const resData = await $fetch(`${multiverseApiUrl}/create`, {
    headers,
    method: 'post',
    body: formData,
  })

  return resData
})
