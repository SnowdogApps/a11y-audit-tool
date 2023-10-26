<script setup lang="ts">
// (error as any) is intentional one used to eliminate ts error,
// more info in https://github.com/logaretm/vee-validate/issues/3784

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database } from 'types/supabase'
import type { Project } from 'types/database'

import { auditFormSchema } from 'validation/schema'
import { displayFirstError } from '~/utils/form'
import { isSupabaseError, SupabaseError } from '~/plugins/error'
import { availableViewports } from '~/data/viewports'

const {
  useFieldModel,
  handleSubmit,
  errors,
  submitCount,
  resetForm,
  setValues,
} = useForm({ validationSchema: toTypedSchema(auditFormSchema) })
const { isSubmitted } = useValidation(submitCount)

const pages = useFieldModel('pages')
const title = useFieldModel('title')
const project = useFieldModel('project')
const username = useFieldModel('username')
const password = useFieldModel('password')
const viewports = useFieldModel('viewports')

const toast = useToast()
const supabase = useSupabaseClient<Database>()
const route = useRoute()
const router = useRouter()
const baseAuditId = route.query.baseAuditId

if (baseAuditId) {
  const { data: baseAudit, error } = await supabase
    .from('audits')
    .select('*, projects(id)')
    .eq('id', baseAuditId)
    .single()

  if (error) {
    const errorWithUpdatedMessage = {
      ...error,
      message: `Failed to copy configuration from audit #${baseAuditId}. ${error.message}`,
    }

    if (isSupabaseError(errorWithUpdatedMessage)) {
      throw new SupabaseError(errorWithUpdatedMessage)
    }
    throw new Error(errorWithUpdatedMessage.message)
  }

  setValues({
    pages: baseAudit.config.pages,
    title: baseAudit.config.title,
    project: baseAudit.projects?.id,
    username: baseAudit.config.basicAuth.username,
    password: baseAudit.config.basicAuth.password,
    viewports: availableViewports
      .filter((viewport) => baseAudit.config.viewports.includes(viewport.name))
      .map((viewport) => viewport.name),
  })

  router.replace({ query: {} })
}

const user = useSupabaseUser()
const projects = ref<Project[]>([])

if (user.value) {
  const { data: projectsData } = await supabase.from('projects').select('*')
  projects.value = projectsData || []
}

const isLoading = ref(false)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const sendForm = handleSubmit(async (values) => {
  try {
    isLoading.value = true

    const config = {
      basicAuth: {
        password: values.password || '',
        username: values.username || '',
      },
      pages: values.pages,
      title: values.title,
      viewports: values.viewports,
    }

    const { data: newAudit, error } = await supabase
      .from('audits')
      .insert({
        project_id: values.project,
        profile_id: user.value.id,
        status: 'draft',
        config,
      })
      .select()
      .single()

    if (error) {
      if (isSupabaseError(error)) {
        throw new SupabaseError(error)
      }

      throw new Error(error?.message || '')
    }

    const { error: apiTestError } = await useFetch('/api/test', {
      method: 'POST',
      body: newAudit,
    })

    toast.add({
      severity: apiTestError.value ? 'error' : 'success',
      summary: apiTestError.value
        ? apiTestError.value?.message
        : 'New audit successfully created',
      life: 3000,
    })

    if (!apiTestError.value) {
      resetForm()
    }
  } catch (error) {
    const { $handleError } = useNuxtApp()

    $handleError(error as Error | SupabaseError)
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
                  v-model="page.url"
                  class="w-full"
                  :data-testid="`audit-page-url-field-${index}`"
                  :name="`pages[${index}].url`"
                  :class="[
                    {
                      'p-invalid': ((errors as any)[`pages[${index}].url`] || (errors as any)[`pages[${index}]`]) && isSubmitted,
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
                  v-model="page.selector"
                  :name="`pages[${index}].selector`"
                  class="w-full"
                  :aria-describedby="`selector-help-${index}`"
                  :data-testid="`audit-page-selector-field-${index}`"
                  :class="[
                    {
                      'p-invalid': ((errors as any)[`pages[${index}].selector`] || (errors as any)[`pages[${index}]`]) && isSubmitted,
                    },
                  ]"
                />
                <small :id="`selector-help-${index}`">
                  Use .class or #id to choose selector to test, just one
                  selector allowed. If empty whole document will be tested.
                </small>
              </div>
              <small
                v-if="(errors as any)[`pages[${index}]`] && isSubmitted"
                class="p-error w-full"
              >
                {{ (errors as any)[`pages[${index}]`] }}
              </small>
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
              @click="pages?.splice(index, 1)"
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
            @click="pages?.push({ url: '', selector: '' })"
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
              <label id="viewports">Screen sizes</label>
              <MultiSelect
                v-model="viewports"
                aria-labelledby="viewports"
                :options="availableViewports"
                option-label="name"
                option-value="name"
                placeholder="Select screen sizes"
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
