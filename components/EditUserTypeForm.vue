<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database, Json } from 'types/supabase'
import { displayFirstError } from 'utils/form'
import { editUserTypeFormSchema } from 'validation/schema'

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: editUserTypeFormSchema,
  }
)

const [user, userType] = useFieldModel(['user', 'userType'])
const types = ['auditor', 'viewer']

const supabase = useSupabaseClient<Database>()
const toast = useToast()
const isLoading = ref(false)

defineProps<{
  users: Database['public']['Tables']['profiles']['Row'][]
}>()
const emit = defineEmits<{ (e: 'after-submit'): void }>()

const { isSubmitted } = useValidation(submitCount)

const setClaim = async (uid: string, claim: string, value: Json) => {
  const { data, error } = await supabase.rpc('set_claim', { uid, claim, value })
  return { data, error }
}
const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const editUserType = handleSubmit(async ({ user: id, userType: userRole }) => {
  try {
    isLoading.value = true
    const authUser = useSupabaseUser()

    if (authUser.value?.id) {
      const { error } = await setClaim(id, 'user_role', userRole)

      if (error) {
        throw error
      }

      toast.add({
        severity: 'success',
        summary: 'Successfully edit user type',
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
        @submit="editUserType"
      >
        <legend class="mb-4 font-bold underline">Update user type</legend>

        <div class="mb-6 grid gap-3 md:grid-cols-2">
          <div>
            <label for="user_id"> User </label>
            <Dropdown
              id="user_id"
              v-model="user"
              :options="users"
              :option-label="
                ({ full_name, email, user_type }) =>
                  `${full_name ?? email} [${user_type ?? 'user type not set'}]`
              "
              option-value="id"
              placeholder="Select"
              class="md:w-14rem w-full"
              data-testid="claims-user-field"
              name="user"
              :class="[{ 'p-invalid': errors.user && isSubmitted }]"
            />
            <small
              v-if="errors.user && isSubmitted"
              class="p-error mt-1"
            >
              {{ errors.user }}
            </small>
          </div>

          <div>
            <label for="user_type">User type</label>
            <Dropdown
              id="user_type"
              v-model="userType"
              :options="types"
              placeholder="Select"
              class="md:w-14rem w-full"
              data-testid="account-userType-field"
              name="userType"
              :class="[{ 'p-invalid': errors.userType && isSubmitted }]"
            />
            <small
              v-if="errors.userType && isSubmitted"
              class="p-error mt-1"
            >
              {{ errors.userType }}
            </small>
          </div>
        </div>

        <Button
          :label="isLoading ? 'Loading ...' : 'Update'"
          type="submit"
          class="p-button-lg w-full"
          data-testid="edit-user-type-submit-button"
          :loading="isLoading"
          :disabled="isLoading"
        />
      </form>
    </template>
  </Card>
</template>
