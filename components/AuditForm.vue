<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import type { InvalidSubmissionContext, FieldArrayContext } from 'vee-validate'
import type { User } from '~/types/user'
import type { Page, AuditForm } from '~/types/audit'

import { clientList, auditorList } from '~/mocks/audit'
import { auditFormSchema } from '~/validation/schema'
import { displayFirstError } from '~/utils/form'

interface InitialValues {
  height: number
  pages: Page[]
  password: string
  resultsDir: string
  reporter: string
  title: string
  username: string
  width: number
  auditor?: number
  client?: number
}

const initialValues: InitialValues = {
  pages: [
    {
      selector: '',
      url: '',
    },
  ],
  title: '',
  resultsDir: '',
  reporter: '',
  username: '',
  password: '',
  height: 600,
  width: 800,
}

const { useFieldModel, handleSubmit, errors, submitCount } = useForm({
  validationSchema: auditFormSchema,
  initialValues,
  keepValuesOnUnmount: true,
})

const {
  fields: pages,
  push,
  remove,
}: Partial<FieldArrayContext> = useFieldArray('pages')
const title = useFieldModel('title')
const resultsDir = useFieldModel('resultsDir')
const client = useFieldModel('client')
const auditor = useFieldModel('auditor')
const reporter = useFieldModel('reporter')
const width = useFieldModel('width')
const height = useFieldModel('height')
const username = useFieldModel('username')
const password = useFieldModel('password')

const date = new Date().toLocaleDateString('en-US')
const clients = ref<User[]>(clientList)
const auditors = ref<User[]>(auditorList)
const isProcessing = ref(false)
const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const sendForm = handleSubmit((values) => {
  try {
    isProcessing.value = true

    const form: AuditForm = {
      axeConfig: {
        reporter: values?.reporter || '',
      },
      basicAuth: {
        password: values?.password || '',
        username: values?.username || '',
      },
      pages: values.pages,
      resultsDir: values?.resultsDir || '',
      title: values.title,
      viewport: {
        height: values?.height || 600,
        width: values?.width || 800,
      },
      client: values.client,
      auditor: values.auditor,
    }

    console.warn(form) // TODO: to remove later
    // TODO: send data to Supabase
  } catch (err) {
    console.warn(err)
  } finally {
    setTimeout(() => {
      isProcessing.value = false
    }, 5000)
  }
}, onInvalidSubmit)
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
            v-for="(page, index) in pages"
            :key="`page-${index}`"
            class="mb-4 grid gap-6 border-b border-b-gray-300 pb-4"
          >
            <div class="grid gap-6 md:grid-cols-2 md:items-start md:gap-x-8">
              <span class="w-full">
                <label :for="`url-${index}`">Url</label>
                <InputText
                  :id="`url-${index}`"
                  v-model="page.value.url"
                  class="w-full"
                  :data-testid="`audit-page-url-field-${index}`"
                  :name="`pages[${index}].url`"
                  :class="[
                    {
                      'p-invalid': errors[`pages[${index}].url`] && isSubmitted,
                    },
                  ]"
                />
                <small
                  v-if="errors[`pages[${index}].url`] && isSubmitted"
                  class="p-error mt-1"
                >
                  {{ errors[`pages[${index}].url`] as string }}
                </small>
              </span>

              <span class="w-full">
                <label for="`selector-${index}`">HTML Selector</label>
                <InputText
                  :id="`selector-${index}`"
                  v-model="page.value.selector"
                  :name="`pages[${index}].selector`"
                  class="w-full"
                  :aria-describedby="`selector-help-${index}`"
                  :data-testid="`audit-page-selector-field-${index}`"
                />
                <small :id="`selector-help-${index}`">
                  Use .class or #id to choose selector to test, just one
                  selector allowed. If empty whole document will be tested.
                </small>
              </span>
            </div>

            <Button
              v-if="index !== 0"
              label="Remove page"
              variant="secondary"
              class="tracking-wider md:justify-self-start"
              icon="pi pi-times"
              :data-testid="`audit-remove-page-button-${index}`"
              outlined
              :pt="{
                icon: { 'aria-hidden': true },
              }"
              @click="remove(index)"
            />
          </div>

          <Button
            label="Add page"
            class="w-full tracking-wider md:w-auto"
            icon="pi pi-plus"
            outlined
            data-testid="audit-add-page-button"
            :pt="{
              icon: { 'aria-hidden': true },
            }"
            @click="push({ url: '', selector: '' })"
          />
        </AccordionTab>
        <AccordionTab header="General">
          <div class="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <span class="w-full">
              <label for="title">Audit title</label>
              <InputText
                id="title"
                v-model="title"
                class="w-full"
                data-testid="audit-title-field"
                name="title"
                :class="[{ 'p-invalid': errors.title && isSubmitted }]"
              />
              <small
                v-if="errors.title && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.title }}
              </small>
            </span>

            <span class="w-full">
              <label for="results-dir">Result directory name</label>
              <InputText
                id="results-dir"
                v-model="resultsDir"
                class="w-full"
                data-testid="audit-results-dir-field"
                name="resulstDir"
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
                name="date"
                date-format="MM/DD/YYYY"
              />
            </span>

            <span class="w-full">
              <label for="client">Client</label>
              <Dropdown
                id="client"
                v-model="client"
                :options="clients"
                option-label="name"
                option-value="id"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="audit-client-field"
                name="client"
                :class="[{ 'p-invalid': errors.client && isSubmitted }]"
              />
              <small
                v-if="errors.client && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.client }}
              </small>
            </span>

            <span class="w-full">
              <label for="auditor">Auditor</label>
              <Dropdown
                id="auditor"
                v-model="auditor"
                :options="auditors"
                option-label="name"
                option-value="id"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="audit-auditor-field"
                name="auditor"
                :class="[{ 'p-invalid': errors.auditor && isSubmitted }]"
              />
              <small
                v-if="errors.auditor && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.auditor }}
              </small>
            </span>
          </div>
        </AccordionTab>
        <AccordionTab header="Axe configuration">
          <div class="grid gap-6 md:grid-rows-3 md:gap-4">
            <span class="w-full">
              <label for="reporter">Reporter</label>
              <InputText
                id="reporter"
                v-model="reporter"
                class="md:w-14rem w-full"
                data-testid="audit-reporter-field"
                name="reporter"
              />
            </span>

            <div class="grid w-full gap-6 gap-x-8 md:grid-cols-2">
              <span class="w-full">
                <label for="viewport-width">Viewport width</label>
                <InputNumber
                  v-model="width"
                  input-id="viewport-width"
                  class="w-full"
                  data-testid="audit-viewport-width-field"
                  name="viewport-width"
                />
              </span>

              <span class="w-full">
                <label for="viewport-height">Viewport height</label>
                <InputNumber
                  v-model="height"
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
                  v-model="username"
                  class="w-full"
                  data-testid="audit-auth-username-field"
                  name="username"
                />
              </span>

              <span class="w-full">
                <label for="password">Basic Auth password</label>
                <Password
                  id="password"
                  v-model="password"
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
        :label="isProcessing ? 'Sending' : 'Send'"
        type="submit"
        class="p-button-lg w-full"
        data-testid="audit-submit-button"
        :loading="isProcessing"
        @click="sendForm"
      />
    </form>
  </section>
</template>
