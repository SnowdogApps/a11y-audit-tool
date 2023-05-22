<script setup lang="ts">


import type { Client } from '~/types/client'
import type { Auditor } from '~/types/auditor'

import { clientList, auditorList } from '~/mocks/audit'

const isTestProcessing = ref(false)
// data
const form = reactive({
  pages: [
    {
      url: null,
      selector: null,
    },
  ],
  title: undefined,
  fileName: undefined,
  resultsDir: undefined,
  basicAuth: {
    username: undefined,
    password: undefined,
  },
  axeConfig: {
    reporter: undefined,
  },
  viewport: {
    width: undefined,
    height: undefined,
  },
})
const disabled = computed(() => {
  return !form.pages[0].url || isTestProcessing.value
})

// methods
function addPage() {
  form.pages.push({ url: null, selector: null })
}
function removePage() {
  form.pages.pop()
}
async function sendForm() {

  const formData = form
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
  //postAxeRequest(data)

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
const clients = ref<Client[]>(clientList)
const auditors = ref<Auditor[]>(auditorList)

const selectedClient = ref<Client>()
const selectedAuditor = ref<Auditor>()
</script>

<template>
  <section>
    <h2>Configuration</h2>
    <form @submit.prevent>
      <Accordion
        :activeIndex="0"
        :multiple="true"
      >
        <AccordionTab header="General">
          <div
            class="grid-col-1 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4"
          >
            <div class="p-component">
              <label for="audit-title">Audit title</label>
              <InputText
                class="w-full"
                id="audit-title"
                v-model="form.title"
                name="audit-title"
              />
            </div>

            <div class="p-component">
              <label for="file-name">Result file name</label>
              <InputText
                class="w-full"
                id="file-name"
                v-model="form.fileName"
                name="file-name"
              />
            </div>

            <div class="p-component">
              <label for="result-dir">Result directory name</label>
              <InputText
                class="w-full"
                id="result-dir"
                v-model="form.resultsDir"
                label="Result directory name"
                name="result-dir"
              />
            </div>

            <div class="p-component">
              <label for="date">Date</label>
              <Calendar
                class="w-full"
                id="date"
                disabled v-model="date"
              />
            </div>

            <div class="p-component">
              <label for="client">Client</label>
              <Dropdown
                id="client"
                v-model="selectedClient"
                :options="clients"
                option-label="name"
                placeholder="Select"
                class="md:w-14rem w-full"
              />
            </div>

            <div class="p-component">
              <label for="auditor">Auditor</label>
              <Dropdown
                id="auditor"
                v-model="selectedAuditor"
                :options="auditors"
                option-label="name"
                placeholder="Select"
                class="md:w-14rem w-full"
              />
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Configuration">
          <div
            class="grid-col-1 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4"
          >
            <h4 class="mb-0">Axe configuration</h4>
            <div class="p-component">
              <label for="reporter">Reporter</label>
              <InputText
                id="reporter"
                v-model="form.axeConfig.reporter"
                name="axe-reporter"
              />
            </div>

            <h4 class="mb-0">Viewport</h4>

            <InputText
              id="viewport-width"
              v-model="form.viewport.width"
              label="Width"
              name="viewport-width"
              placeholder="Viewport width"
            />
            <InputText
              id="viewport-height"
              v-model="form.viewport.height"
              label="Height"
              name="viewport-height"
              placeholder="Viewport height"
            />
            <h4 class="mb-0">Basic Auth configuration</h4>
            <InputText
              id="username"
              v-model="form.basicAuth.username"
              label="User name"
              name="username"
              placeholder="User name"
            />
            <InputText
              id="password"
              v-model="form.basicAuth.password"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </AccordionTab>

        <AccordionTab header="Pages">
          <div
            v-for="(page, index) in form.pages"
            :key="`page-${index}`"
            class="flex flex-col gap-2"
          >
            <div class="flex flex-row items-end">
              <InputText
                :id="`url-${index}`"
                v-model="page.url"
                label="Url"
                :name="`url-${index}`"
                placeholder="url"
                class="flex-grow"
              />
              <Button
                v-if="index !== 0"
                label="Remove page"
                variant="secondary"
                class="mb-4 ml-4"
                @click="removePage"
              />
            </div>
            <InputText
              :id="`selector-${index}`"
              v-model="page.selector"
              label="HTML Selector"
              :name="`selector-${index}`"
              placeholder="selector"
              note="use .class or #id to choose selector to test, just one selector allowed. If empty whole document will be tested."
              class="self-end md:w-1/2"
            />
          </div>
          <Button
            label="Add another page"
            class="w-full md:w-auto"
            @click="addPage"
          />
        </AccordionTab>
      </Accordion>

      <Button
        label="Send"
        type="submit"
        class="p-button-lg mb-4 w-full"
        @click="sendForm"
      />
    </form>
  </section>
</template>
