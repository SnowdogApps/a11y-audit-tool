<script setup lang="ts">
import type { User } from '~/types/user'
import type { AuditForm } from '~/types/audit'

import { clientList, auditorList } from '~/mocks/audit'

const isTestProcessing = ref(false)
// data
const form: AuditForm = reactive({
  axeConfig: {
    reporter: '',
  },
  basicAuth: {
    password: '',
    username: '',
  },
  fileName: '',
  pages: [
    {
      selector: '',
      url: '',
    },
  ],
  resultsDir: '',
  title: '',
  viewport: {
    height: 600,
    width: 800,
  },
})

// methods
function addPage() {
  form.pages.push({ url: '', selector: '' })
}
function removePage(index: number) {
  form.pages.splice(index, 1)
}
// eslint-disable-next-line require-await
async function sendForm() {
  const formData = form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = {
    _id: crypto ? crypto.randomUUID() : new Date().getTime().toString(),
    ...formData,
    basicAuth:
      formData.basicAuth.username && formData.basicAuth.password
        ? formData.basicAuth
        : undefined,
    axeConfig: formData.axeConfig.reporter ? formData.axeConfig : undefined,
    viewport:
      formData.viewport.width && formData.viewport.height
        ? formData.viewport
        : undefined,
  }
  // emit('submit', data)
  // postAxeRequest(data)

  try {
    isTestProcessing.value = true
    // await listenForAxeStatus(data)
    // getAxeResults()
  } catch (err) {
    console.warn(err)
  } finally {
    isTestProcessing.value = false
  }
}

const date = new Date()
const clients = ref<User[]>(clientList)
const auditors = ref<User[]>(auditorList)

const selectedClient = ref<User>()
const selectedAuditor = ref<User>()
</script>

<template>
  <section>
    <h2>Configuration</h2>
    <form @submit.prevent>
      <Accordion
        :active-index="[0, 1]"
        :multiple="true"
      >
        <AccordionTab header="Pages">
          <div
            v-for="(page, index) in form.pages"
            :key="`page-${index}`"
            class="mb-4 grid gap-6 border-b border-b-gray-300 pb-4"
          >
            <div class="grid gap-6 md:grid-cols-2 md:items-start md:gap-x-8">
              <span class="w-full">
                <label :for="`url-${index}`">Url</label>
                <InputText
                  :id="`url-${index}`"
                  v-model="page.url"
                  class="w-full"
                  :data-testid="`audit-page-url-field-${index}`"
                  :name="`url[${index}]`"
                />
              </span>

              <span class="w-full">
                <label for="`selector-${index}`">HTML Selector</label>
                <InputText
                  :id="`selector-${index}`"
                  v-model="page.selector"
                  :name="`selector[${index}]`"
                  class="w-full"
                  :aria-describedby="`selector-help-${index}`"
                  :data-testid="`audit-page-selector-field-${index}`"
                />
                <small
                  :id="`selector-help-${index}`"
                  class=""
                >
                  Use .class or #id to choose selector to test, just one
                  selector allowed. If empty whole document will be tested.
                </small>
              </span>
            </div>

            <Button
              label="Remove page"
              variant="secondary"
              class="tracking-wider md:justify-self-start"
              icon="pi pi-times"
              :data-testid="`audit-remove-page-button-${index}`"
              outlined
              @click="removePage(index)"
            />
          </div>

          <Button
            label="Add page"
            class="w-full tracking-wider md:w-auto"
            icon="pi pi-plus"
            outlined
            data-testid="audit-add-page-button"
            @click="addPage"
          />
        </AccordionTab>
        <AccordionTab header="General">
          <div class="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <span class="w-full">
              <label for="audit-title">Audit title</label>
              <InputText
                id="audit-title"
                v-model="form.title"
                class="w-full"
                data-testid="audit-title-field"
                name="audit-title"
              />
            </span>

            <span class="w-full">
              <label for="file-name">Result file name</label>
              <InputText
                id="file-name"
                v-model="form.fileName"
                class="w-full"
                data-testid="audit-file-name-field"
                name="file-name"
              />
            </span>

            <span class="w-full">
              <label for="result-dir">Result directory name</label>
              <InputText
                id="result-dir"
                v-model="form.resultsDir"
                class="w-full"
                data-testid="audit-result-dir-field"
                name="result-dir"
              />
            </span>

            <span class="w-full">
              <label for="date">Date</label>
              <Calendar
                v-model="date"
                input-id="date"
                class="w-full"
                disabled
                data-testid="audit-date-field"
                name="audit-date"
                date-format="MM/DD/YYYY"
              />
            </span>

            <span class="w-full">
              <label for="client">Client</label>
              <Dropdown
                id="client"
                v-model="selectedClient"
                :options="clients"
                option-label="name"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="audit-client-field"
                name="client"
              />
            </span>

            <span class="w-full">
              <label for="auditor">Auditor</label>
              <Dropdown
                id="auditor"
                v-model="selectedAuditor"
                :options="auditors"
                option-label="name"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="audit-auditor-field"
                name="auditor"
              />
            </span>
          </div>
        </AccordionTab>
        <AccordionTab header="Axe configuration">
          <div class="grid gap-6 md:grid-rows-3 md:gap-4">
            <span class="w-full">
              <label for="reporter">Reporter</label>
              <InputText
                id="reporter"
                v-model="form.axeConfig.reporter"
                class="md:w-14rem w-full"
                data-testid="audit-reporter-field"
                name="axe-reporter"
              />
            </span>

            <div class="grid w-full gap-6 gap-x-8 md:grid-cols-2">
              <span class="w-full">
                <label for="viewport-width">Viewport width</label>
                <InputNumber
                  v-model="form.viewport.width"
                  input-id="viewport-width"
                  class="w-full"
                  data-testid="audit-viewport-width-field"
                  name="viewport-width"
                />
              </span>

              <span class="w-full">
                <label for="viewport-height">Viewport height</label>
                <InputNumber
                  v-model="form.viewport.height"
                  input-id="viewport-height"
                  class="w-full"
                  data-testid="audit-viewport-height-field"
                  name="viewport-height"
                />
              </span>
            </div>

            <div class="grid w-full gap-6 gap-x-8 md:grid-cols-2">
              <span class="w-full">
                <label for="username">Basic Auth username</label>
                <InputText
                  id="username"
                  v-model="form.basicAuth.username"
                  class="w-full"
                  data-testid="audit-auth-username-field"
                  name="username"
                />
              </span>

              <span class="w-full">
                <label for="password">Basic Auth password</label>
                <Password
                  id="password"
                  v-model="form.basicAuth.password"
                  class="w-full"
                  input-class="w-full"
                  data-testid="audit-auth-password-field"
                  name="password"
                  :feedback="false"
                  toggle-mask
                />
              </span>
            </div>
          </div>
        </AccordionTab>
      </Accordion>

      <Button
        label="Send"
        type="submit"
        class="p-button-lg w-full"
        data-testid="audit-submit-button"
        @click="sendForm"
      />
    </form>
  </section>
</template>
