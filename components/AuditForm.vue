<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext, FieldArrayContext } from 'vee-validate'
import type { Database } from 'types/supabase'
import type { Page, AuditForm } from 'types/audit'

import { auditFormSchema } from '~/validation/schema'
import { displayFirstError } from '~/utils/form'

interface InitialValues {
  height: number
  pages: Page[]
  password: string
  title: string
  username: string
  width: number
  project?: number
}

const initialValues: InitialValues = {
  pages: [
    {
      selector: '',
      url: '',
    },
  ],
  title: '',
  username: '',
  password: '',
  height: 600,
  width: 800,
}

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: auditFormSchema,
    initialValues,
  }
)

const {
  fields: pages,
  push,
  remove,
}: Partial<FieldArrayContext> = useFieldArray('pages')
const title = useFieldModel('title')
const project = useFieldModel('project')
const width = useFieldModel('width')
const height = useFieldModel('height')
const username = useFieldModel('username')
const password = useFieldModel('password')

const toast = useToast()
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const projects = ref<Database['public']['Tables']['projects']['Row'][]>([])

if (user.value) {
  const { data: projectsData } = await supabase.from('projects').select('*')
  projects.value = projectsData || []
}

const isLoading = ref(false)
const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const sendForm = handleSubmit(async (values) => {
  try {
    isLoading.value = true

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

    const { error } = await supabase.from('audits').insert({
      project_id: values.project,
      profile_id: user?.value.id,
      status: 'draft',
      issues: form,
      created_at: new Date().toLocaleDateString('en-US'),
    })

    if (error) {
      throw error
    }

    toast.add({
      severity: 'success',
      summary: 'New audit successfully created',
      life: 3000,
    })

    resetForm()
  } catch (error) {
    console.warn(error)
    toast.add({
      severity: 'error',
      summary: `There was an error`,
      detail: `Error #${error.code} - ${error.message}`,
      life: 3000,
    })
  } finally {
    isLoading.value = false
  }
}, onInvalidSubmit)
</script>

<template>
  <section>
    <h2>Configuration</h2>
    <form @submit="sendForm">
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
              <div class="w-full">
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
              </div>

              <div class="w-full">
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
              </div>
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
            <div class="w-full">
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
            </div>

            <div class="w-full">
              <label for="project">Project</label>
              <Dropdown
                id="project"
                v-model="project"
                :options="projects"
                option-label="name"
                option-value="id"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="audit-project-field"
                name="project"
                :class="[{ 'p-invalid': errors.project && isSubmitted }]"
              />
              <small
                v-if="errors.project && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.project }}
              </small>
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Axe configuration">
          <div class="grid gap-6 md:grid-rows-3 md:gap-4">
            <div class="grid w-full gap-6 gap-x-8 md:grid-cols-2">
              <div class="w-full">
                <label for="viewport-width">Viewport width</label>
                <InputNumber
                  v-model="width"
                  input-id="viewport-width"
                  class="w-full"
                  data-testid="audit-viewport-width-field"
                  name="viewport-width"
                />
              </div>

              <div class="w-full">
                <label for="viewport-height">Viewport height</label>
                <InputNumber
                  v-model="height"
                  input-id="viewport-height"
                  class="w-full"
                  data-testid="audit-viewport-height-field"
                  name="viewport-height"
                />
              </div>
            </div>

            <div class="grid w-full gap-6 gap-x-8 md:grid-cols-2">
              <div class="w-full">
                <label for="username">Basic Auth username</label>
                <InputText
                  id="username"
                  v-model="username"
                  class="w-full"
                  data-testid="audit-auth-username-field"
                  name="username"
                />
              </div>

              <div class="w-full">
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
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>

      <Button
        :label="isLoading ? 'Sending...' : 'Send'"
        type="submit"
        class="p-button-lg w-full"
        data-testid="audit-submit-button"
        :loading="isLoading"
        :disabled="isLoading"
      />
    </form>
  </section>
</template>
