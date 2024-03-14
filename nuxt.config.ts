import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: '' }],
      titleTemplate: '%s | A11y audits',
    },
  },
  alias: {
    types: resolve(__dirname, './types'),
    utils: resolve(__dirname, './utils'),
    validation: resolve(__dirname, './validation'),
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
  ],
  css: [
    '~/assets/reset.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/themes/snowdog/theme.scss',
    'vue-virtual-scroller/dist/vue-virtual-scroller.css',
    '~/assets/print.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeTitle: false,
            },
          },
        },
      ],
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/audit/report/*', '/register', '/reset-password'],
    },
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      axeRunnerApiUrl: process.env.AXE_RUNNER_API_URL,
      basicAuthUser: process.env.BASIC_AUTH_USER, // while only for dev keep it public
      basicAuthPassed: process.env.BASIC_AUTH_PASSWD, // while only for dev keep it public
    },
  },
})
