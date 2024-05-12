import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import type { ViewportSize } from 'playwright'
import type { AxeResults } from 'axe-core'
import type { Config, TestResult, ResultError } from 'types/axe-runner'
import type { AuditConfiguration } from 'types/audit'
import { parseResults } from './utils'
import supabase from './supabase'

export const useConfig = function (params: AuditConfiguration): Config {
  const basicAuth = params.basicAuth
  const pages = params.pages
  const viewports = params.viewports.map(([width, height]) => ({
    width,
    height,
  }))

  const {
    NITRO_PUBLIC_SUPABASE_URL: supbaseUrl,
    NITRO_PUBLIC_SUPABASE_KEY: supbaseKey,
    NITRO_SUPABASE_SERVICE_KEY: supbaseServiceKey,
  } = process.env

  const isSupabaseConfigComplete = [
    supbaseUrl,
    supbaseKey,
    supbaseServiceKey,
  ].every(Boolean)

  if (!isSupabaseConfigComplete) {
    console.error('Update your supabase config to check save process locally.')

    if (!process.env.dev) {
      throw new Error('Supabase config not complete!')
    }
  }

  return {
    basicAuth,
    pages,
    // @ts-ignore - fix me
    viewports,
    supbaseUrl,
    supbaseKey,
    supbaseServiceKey,
  }
}

// @todo: add basicAuth support
export const doTest = async function (
  auditId: string,
  size: ViewportSize,
  config: Config
) {
  const { pages } = config
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  const results: TestResult[] = []

  await page.setViewportSize(size)

  for await (const { url, selector } of pages) {
    let result: AxeResults | undefined
    const errors: ResultError[] = []

    await page.goto(url).catch(() =>
      errors.push({
        url,
        message: 'Page does not exist.',
      })
    )

    const axe = await new AxeBuilder({ page })

    if (selector) {
      await page
        .locator(selector)
        .waitFor()
        .then(async () => {
          axe.include(selector)
          await page.evaluate(() =>
            window.scrollTo(0, document.body.scrollHeight)
          )
        })
        .catch(() =>
          errors.push({
            url,
            message: 'Selector does not exist.',
          })
        )
    }

    if (!errors.length) {
      result = await axe.analyze()
    }

    results.push(parseResults(auditId, size, errors, result, selector))
  }

  if (process.env.dev) {
    await useStorage().setItem(`db:a11y_${auditId}.json`, results)
  }

  await supabase(config, results)
}
