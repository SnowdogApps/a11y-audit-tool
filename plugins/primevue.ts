import PrimeVue from 'primevue/config'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Password from 'primevue/password'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Accordion', Accordion)
  nuxtApp.vueApp.component('AccordionTab', AccordionTab)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Password', Password)
})
