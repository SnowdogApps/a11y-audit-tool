/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['app.vue', `components/**/*.vue`, `pages/**/*.vue`],
  theme: {},
  plugins: [],
}
