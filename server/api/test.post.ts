import { defineEventHandler, createError } from 'h3'
import type { Audit } from 'types/database'
import { serverSupabaseUser } from '#supabase/server'
import { doTest, useConfig } from '@/server/axe-runner/core'

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

  try {
    const config = useConfig(body.config)

    if (!config.pages?.length || !config.viewports?.length) {
      return createError({
        status: 400,
        message: 'Missing params.',
      })
    }

    for (const viewport of config.viewports) {
      doTest(String(body.id), viewport, config)
    }
  } catch (err: any) {
    console.error(err)
    return createError({
      status: 500,
      message: `Req processing error. ${err?.message || ''}`,
    })
  }

  return true
})
