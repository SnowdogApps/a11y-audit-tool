<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database } from 'types/supabase'
import { displayFirstError } from 'utils/form'
import { createProjectFormSchema } from 'validation/schema'

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: createProjectFormSchema,
  }
)

const [name, description] = useFieldModel(['name', 'description'])

const supabase = useSupabaseClient<Database>()
const toast = useToast()
const isLoading = ref(false)

const emit = defineEmits<{ (e: 'after-submit'): void }>()

const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const createProject = handleSubmit(async ({ name, description }) => {
  try {
    isLoading.value = true
    const authUser = useSupabaseUser()

    if (authUser.value?.id) {
      const { error } = await supabase
        .from('projects')
        .insert({ name, description })

      if (error) {
        throw error
      }

      toast.add({
        severity: 'success',
        summary: 'Successfully create new project',
        life: 3000,
      })

      resetForm()
      emit('after-submit')
    }
  } catch (error) {
    console.warn({ error })
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
  <Card class="mb-6">
    <template #content>
      <form
        class="mb-4"
        @submit="createProject"
      >
        <legend class="mb-4 font-bold underline">Create project</legend>

        <div class="mb-6 grid gap-3 md:grid-cols-2">
          <div>
            <label for="project_name">Name</label>
            <InputText
              id="project_name"
              v-model="name"
              class="w-full"
              data-testid="create-project-name-field"
              name="name"
              :class="[{ 'p-invalid': errors.name && isSubmitted }]"
            />
            <small
              v-if="errors.name && isSubmitted"
              class="p-error mt-1"
            >
              {{ errors.name }}
            </small>
          </div>

          <div>
            <label for="project_description">Description</label>
            <InputText
              id="project_description"
              v-model="description"
              class="w-full"
              data-testid="create-project-name-field"
              name="description"
              :class="[{ 'p-invalid': errors.description && isSubmitted }]"
            />
            <small
              v-if="errors.description && isSubmitted"
              class="p-error mt-1"
            >
              {{ errors.description }}
            </small>
          </div>
        </div>

        <Button
          :label="isLoading ? 'Loading ...' : 'Create'"
          type="submit"
          class="p-button-lg w-full"
          data-testid="create-project-submit-button"
          :loading="isLoading"
          :disabled="isLoading"
        />
      </form>
    </template>
  </Card>
</template>
