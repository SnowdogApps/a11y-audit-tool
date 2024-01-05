<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database } from 'types/supabase'
import type { Project } from 'types/database'

import type { Page, AuditConfiguration } from 'types/audit'
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

const {
  fields: pages,
  push: pushPage,
  remove: removePage,
} = useFieldArray<Page>('pages')
const title = useFieldModel('title')
const project = useFieldModel('project')
const username = useFieldModel('username')
const password = useFieldModel('password')
const viewports = useFieldModel('viewports')
const noAxe = useFieldModel('noAxe')
const description = useFieldModel('description')

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

    const { $handleError } = useNuxtApp()
    $handleError(errorWithUpdatedMessage as Error | SupabaseError)
  } else {
    setValues({
      pages: baseAudit.config.pages,
      title: baseAudit.config.title,
      project: baseAudit.projects?.id,
      username: baseAudit.config.basicAuth.username,
      password: baseAudit.config.basicAuth.password,
      viewports: availableViewports
        .filter((viewport) =>
          baseAudit.config.viewports.includes(viewport.name)
        )
        .map((viewport) => viewport.name),
      noAxe: baseAudit.config.noAxe,
      description: baseAudit.config.description,
    })

    router.replace({ query: {} })
  }
}

const user = useSupabaseUser()
const projects = ref<Project[]>([])
const userProjectIds = ref<number[]>([])
const { isAdmin } = useUser()

const isAllowedToAddAuditToSelectedProject = computed<boolean>(
  () =>
    project.value &&
    (isAdmin.value || userProjectIds.value.includes(project.value))
)

if (user.value) {
  const { data: projectsData } = await supabase.from('projects').select('*')
  projects.value = projectsData || []
  const { data: profileProjectData } = await supabase
    .from('profile_project')
    .select('project_id')
    .eq('profile_id', user.value.id)
  userProjectIds.value =
    profileProjectData?.map((item) => item.project_id) || []
}

const isLoading = ref(false)
const isAuditProcessingDialogVisible = ref(false)
const newAuditId = ref<number>()
const selectedProjectName = computed(
  () =>
    projects.value.find((item) => item.id === project.value)?.name ||
    'this project'
)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const sendForm = handleSubmit(async (values) => {
  try {
    isLoading.value = true

    let config: AuditConfiguration = {
      basicAuth: {
        password: '',
        username: '',
      },
      pages: [],
      title: values.title,
      viewports: values.viewports,
      noAxe: values.noAxe,
      description: values.description || '',
    }

    if (!values.noAxe) {
      config = {
        ...config,
        basicAuth: {
          password: values.password || '',
          username: values.username || '',
        },
        pages: values.pages,
      }
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

    if (noAxe.value) {
      navigateTo(`/audit/${newAudit.id}`)
    } else {
      const { error: apiTestError } = await useFetch('/api/test', {
        method: 'POST',
        body: newAudit,
      })

      if (apiTestError.value) {
        toast.add({
          severity: 'error',
          summary: apiTestError.value?.message,
          life: 3000,
        })
      } else {
        newAuditId.value = newAudit.id
        isAuditProcessingDialogVisible.value = true
      }
    }
  } catch (error) {
    const { $handleError } = useNuxtApp()

    $handleError(error as Error | SupabaseError)
  } finally {
    isLoading.value = false
  }
}, onInvalidSubmit)

const onAuditProcessingDialogClose = (resetAuditForm: boolean = true) => {
  isAuditProcessingDialogVisible.value = false
  newAuditId.value = undefined
  isLoading.value = false
  resetAuditForm && resetForm()
}
</script>

<template>
  <section>
    <h2 class="mb-4">Configuration</h2>
    <form @submit="sendForm">
      <div class="mb-4 flex items-center">
        <InputSwitch
          id="no-axe"
          v-model="noAxe"
          data-testid="audit-no-axe-field"
          class="mr-3"
        />
        <label
          for="no-axe"
          class="cursor-pointer"
          @click="noAxe = !noAxe"
        >
          Skip Axe automatic tests. I only want to test manually.
        </label>
      </div>
      <Accordion
        :active-index="[0, 1]"
        :multiple="true"
      >
        <AccordionTab
          v-if="!noAxe"
          header="Pages"
        >
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
                      'p-invalid':
                        (errors[`pages[${index}].url` as `pages.${number}.url`] ||
                          errors[`pages[${index}]` as `pages.${number}`]) &&
                        isSubmitted,
                    },
                  ]"
                />
                <small
                  v-if="errors[`pages[${index}].url` as `pages.${number}.url`] && isSubmitted"
                  class="p-error mt-1"
                >
                  {{ errors[`pages[${index}].url` as `pages.${number}.url`] }}
                </small>
              </div>

              <div class="w-full">
                <label :for="`selector-${index}`">HTML Selector</label>
                <InputText
                  :id="`selector-${index}`"
                  v-model="page.value.selector"
                  :name="`pages[${index}].selector`"
                  class="w-full"
                  :aria-describedby="`selector-help-${index}`"
                  :data-testid="`audit-page-selector-field-${index}`"
                  :class="[
                    {
                      'p-invalid':
                        (errors[`pages[${index}].selector` as `pages.${number}.selector`] ||
                          errors[`pages[${index}]` as `pages.${number}`]) &&
                        isSubmitted,
                    },
                  ]"
                />
                <small :id="`selector-help-${index}`">
                  Use .class or #id to choose selector to test, just one
                  selector allowed. If empty whole document will be tested.
                </small>
              </div>
              <small
                v-if="errors[`pages[${index}]` as `pages.${number}`] && isSubmitted"
                class="p-error w-full"
              >
                {{ errors[`pages[${index}]` as `pages.${number}`] }}
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
              @click="removePage(index)"
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
            @click="pushPage({ url: '', selector: '' })"
          />
        </AccordionTab>
        <AccordionTab header="General">
          <div class="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <div class="w-full">
              <label for="title">Title</label>
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
              <label
                id="project-label"
                for="project"
              >
                Project
              </label>
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
                aria-labelledby="project-label"
              />
              <small
                v-if="errors.project && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.project }}
              </small>
            </div>
            <div class="col-span-2">
              <label for="description">Description</label>
              <Textarea
                id="description"
                v-model="description"
                name="description"
                class="w-full"
                rows="5"
                :aria-describedby="noAxe ? 'description-help' : undefined"
              />
              <small
                v-if="noAxe"
                id="description-help"
                class="block"
              >
                In case the audit only includes manual tests, be sure to
                disclose exactly what you'll be testing.
              </small>
              <small
                v-if="errors.description && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.description }}
              </small>
            </div>
          </div>
        </AccordionTab>
        <AccordionTab :header="noAxe ? 'Devices' : 'Axe configuration'">
          <div :class="{ 'grid gap-6 md:grid-rows-2 md:gap-4': !noAxe }">
            <div class="grid">
              <label
                id="viewports"
                :class="{ 'sr-only': noAxe }"
              >
                Screen sizes
              </label>
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

            <div
              v-if="!noAxe"
              class="grid w-full gap-6 gap-x-8 md:grid-cols-2"
            >
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
                  :pt="{
                    input: {
                      autocomplete: 'off',
                    },
                  }"
                />
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>

      <div aria-live="assertive">
        <small
          v-if="project && !isAllowedToAddAuditToSelectedProject"
          class="mb-4 mt-3 block text-red-700"
        >
          You don't have permission to add an audit to the
          {{ selectedProjectName }}. To gain access please contact the
          administrator.
        </small>
      </div>
      <Button
        :label="isLoading ? 'Sending...' : 'Send'"
        type="submit"
        class="p-button-lg w-full"
        data-testid="audit-submit-button"
        :loading="isLoading"
        :disabled="isLoading || !isAllowedToAddAuditToSelectedProject"
      />
    </form>
    <LazyAuditProcessingDialog
      v-if="newAuditId"
      v-model:visible="isAuditProcessingDialogVisible"
      :audit-id="newAuditId"
      @close="
        (options) => onAuditProcessingDialogClose(options?.resetAuditForm)
      "
      @hide="onAuditProcessingDialogClose"
    />
  </section>
</template>
