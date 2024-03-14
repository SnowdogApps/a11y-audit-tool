import { defineEventHandler, createError } from 'h3'
import type { Audit } from 'types/database'
import type { AuditConfiguration } from 'types/audit'
import { serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const serverUser = await serverSupabaseUser(event)

  if (serverUser?.app_metadata.user_role !== 'auditor') {
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

  const { basicAuthUser, basicAuthPassed, axeRunnerApiUrl } =
    useRuntimeConfig().public
  const config = body.config as unknown as AuditConfiguration
  const headers: { Authorization?: string } = {}

  if (basicAuthUser && basicAuthPassed) {
    headers.Authorization = `Basic ${Buffer.from(
      `${basicAuthUser}:${basicAuthPassed}`
    ).toString('base64')}`
  }

  const resData = await $fetch(axeRunnerApiUrl, {
    headers,
    method: 'post',
    body: config,
  })

  return resData
})
