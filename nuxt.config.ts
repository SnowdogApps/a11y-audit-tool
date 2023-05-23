// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: '' }],
      titleTemplate: '%s | A11y audits',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-svgo'
  ],
  css: [
    '~/assets/reset.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/themes/snowdog/theme.scss',
  ],
  build: {
    transpile: ['primevue'],
  },
  svgo: {
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
})
