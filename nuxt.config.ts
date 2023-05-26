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
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/supabase'],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  typescript: {
    strict: true,
  },
})
