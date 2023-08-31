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
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@nuxtjs/supabase'],
  css: [
    '~/assets/reset.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/themes/snowdog/theme.scss',
    'vue-virtual-scroller/dist/vue-virtual-scroller.css',
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
        },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      multiverseApiUrl: process.env.MULTIVERSE_API_URL,
      basicAuthUser: process.env.BASIC_AUTH_USER, // while only for dev keep it public
      basicAuthPassed: process.env.BASIC_AUTH_PASSWD, // while only for dev keep it public
    },
  },
})
