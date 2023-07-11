<script setup lang="ts">
// (error as any) is intentional one used to eliminate ts error,
// more info in https://github.com/logaretm/vee-validate/issues/3784

import { useForm, useFieldArray } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type Ref from 'vue'
import type { User } from '@supabase/gotrue-js'
import type { Database, Json } from 'types/supabase'

import type { Page } from 'types/audit'
import { auditFormSchema } from 'validation/schema'
import { displayFirstError } from '~/utils/form'
import { isSupabaseError, SupabaseError } from '~/plugins/error'
import { availableViewports, defaultViewports } from '~/data/viewports'

interface InitialValues {
  pages: Page[]
  password: string
  project: number | undefined
  title: string
  username: string
  viewports: string[]
}

const initialValues: InitialValues = {
  pages: [
    {
      selector: '',
      url: '',
    },
  ],
  password: '',
  title: '',
  project: undefined,
  username: '',
  viewports: defaultViewports.map((item) => item.name),
}

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: auditFormSchema,
    initialValues,
  }
)

const { fields, push, remove } = useFieldArray<Page>('pages')
const title = useFieldModel('title')
const project = useFieldModel('project')
const username = useFieldModel('username')
const password = useFieldModel('password')
const viewports = useFieldModel('viewports')

const toast = useToast()
const user: Ref<User | null> = useSupabaseUser()
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

    const form = {
      basicAuth: {
        password: values?.password || '',
        username: values?.username || '',
      },
      pages: values.pages as unknown as Json,
      title: values.title,
      viewports: values.viewports,
    } as unknown as Json

    const { data, error } = await supabase
      .from('audits')
      .insert({
        project_id: values.project,
        profile_id: user?.value?.id || '',
        status: 'draft',
        config: form,
      })
      .select()
      .single()

    if (error) {
      if (isSupabaseError(error)) {
        throw new SupabaseError(error)
      }

      throw new Error(error?.message || '')
    }

    await useFetch('/api/test', {
      method: 'POST',
      body: data,
    })

    toast.add({
      severity: 'success',
      summary: 'New audit successfully created',
      life: 3000,
    })

    resetForm()
  } catch (error) {
    const { $handleSupabaseError, $handleError } = useNuxtApp()

    if (isSupabaseError(error)) {
      $handleSupabaseError(error)
    }

    $handleError(error as Error)
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
            v-for="(page, index) in fields"
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
                      'p-invalid': (errors as any)[`pages[${index}].url`] && isSubmitted,
                    },
                  ]"
                />
                <small
                  v-if="(errors as any)[`pages[${index}].url`] && isSubmitted"
                  class="p-error mt-1"
                >
                  {{ (errors as any)[`pages[${index}].url`] }}
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
          <div class="grid gap-6 md:grid-rows-2 md:gap-4">
            <div class="grid gap-6 gap-x-8">
              <label id="viewports">Viewports</label>
              <MultiSelect
                v-model="viewports"
                aria-labelledby="viewports"
                :options="availableViewports"
                option-label="name"
                option-value="name"
                placeholder="Select Cities"
                :max-selected-labels="3"
                name="viewports"
                :class="[{ 'p-invalid': errors.viewports && isSubmitted }]"
              >
                <template #option="slotProps">
                  <div class="align-items-center flex">
                    <div>
                      {{ slotProps.option.name }} [{{
                        slotProps.option.viewport.join(' x ')
                      }}]
                    </div>
                  </div>
                </template>
              </MultiSelect>
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
