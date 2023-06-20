import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  addServerHandler,
  createResolver
} from '@nuxt/kit'

export interface ModuleOptions {
  routeName: string
  fileNamePrefix?: string
  resultsDir: string
  basicAuth?: {
    login: string
    password: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@snowdog/a11y',
    configKey: 'a11y',
  },
  defaults: {
    routeName: '/api/test',
    fileNamePrefix: undefined,
    resultsDir: './a11y-results',
  },
  setup(options, nuxt) {
    const metaUrl = import.meta.url
    const runtimeDir = fileURLToPath(new URL('./runtime', metaUrl))
    const { resolve } = createResolver(metaUrl)

    nuxt.options.build.transpile.push(runtimeDir)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addServerHandler({
      route: options.routeName,
      handler: resolve(runtimeDir, 'server/api/test')
    })
  }
})
