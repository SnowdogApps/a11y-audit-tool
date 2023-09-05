<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database } from 'types/supabase'
import type { Project, Profile } from 'types/database'
import { displayFirstError } from 'utils/form'
import { addProfileToProjectFormSchema } from 'validation/schema'
import { isSupabaseError, SupabaseError } from '~/plugins/error'

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: addProfileToProjectFormSchema,
  }
)

const [profile, project] = useFieldModel(['profile', 'project'])

const supabase = useSupabaseClient<Database>()
const toast = useToast()
const isLoading = ref(false)

defineProps<{
  profiles: Profile[]
  projects: Project[]
}>()
const emit = defineEmits<{ (e: 'after-submit'): void }>()

const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const addProfileToProject = handleSubmit(async ({ profile, project }) => {
  // todo: add blocking duplication of entry in datatable
  try {
    isLoading.value = true
    const authUser = useSupabaseUser()

    if (authUser.value?.id) {
      const { error } = await supabase.from('profile_project').insert({
        profile_id: profile,
        project_id: project,
      })

      if (error) {
        if (isSupabaseError(error)) {
          throw new SupabaseError(error)
        }

        throw new Error(error?.message || '')
      }

      emit('after-submit')
      toast.add({
        severity: 'success',
        summary: 'You successfully added profile to project',
        life: 3000,
      })

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
  <Card>
    <template #content>
      <form @submit="addProfileToProject">
        <legend class="mb-4 w-full font-bold">Add profile to projects</legend>

        <div class="mb-6 grid gap-3 md:grid-cols-2">
          <div>
            <label for="profile_id">User</label>
            <Dropdown
              id="profile_id"
              v-model="profile"
              :options="profiles"
              :option-label="
                ({ full_name, email, user_type }) =>
                  `${full_name ?? email} [${user_type ?? 'user type not set'}]`
              "
              option-value="id"
              placeholder="Select"
              class="w-full"
              data-testid="claims-user-field"
              name="client"
              :class="[{ 'p-invalid': errors.profile && isSubmitted }]"
            />
            <small
              v-if="errors.profile && isSubmitted"
              class="p-error mt-1"
            >
              {{ errors.profile }}
            </small>
          </div>

          <div>
            <label
              class="mr-2"
              for="project"
            >
              Project
            </label>
            <Dropdown
              id="project"
              v-model="project"
              :options="projects"
              :option-label="({ id, name }) => `${name} [${id}]`"
              option-value="id"
              placeholder="Select"
              class="w-full"
              data-testid="claims-project-field"
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

        <Button
          :label="isLoading ? 'Loading ...' : 'Update'"
          type="submit"
          class="p-button-lg w-full"
          data-testid="audit-submit-button"
          :loading="isLoading"
          :disabled="isLoading"
        />
      </form>
    </template>
  </Card>
</template>
