import PrimeVue from 'primevue/config'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import InputSwitch from 'primevue/inputswitch'
import Menu from 'primevue/menu'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import ProgressBar from 'primevue/progressbar'
import Sidebar from 'primevue/sidebar'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import TreeTable from 'primevue/treetable'

import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ConfirmationService)
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Accordion', Accordion)
  nuxtApp.vueApp.component('AccordionTab', AccordionTab)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('InlineMessage', InlineMessage)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('InputSwitch', InputSwitch)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('MultiSelect', MultiSelect)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('ProgressBar', ProgressBar)
  nuxtApp.vueApp.component('Sidebar', Sidebar)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Textarea', Textarea)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('TreeTable', TreeTable)
})
