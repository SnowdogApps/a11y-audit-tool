<script setup lang="ts">
import type { InvalidSubmissionContext } from 'vee-validate'
import { useForm } from 'vee-validate'
import { accountFormSchema } from 'validation/schema'
import { displayFirstError } from '~/utils/form'
import type { Database } from 'types/supabase'
import { isSupabaseError, SupabaseError } from '~/plugins/error'

definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
interface InitialValues {
  email: string
  username: string
  fullName: string
  avatarUrl: string
  userType: string
}

const initialValues: InitialValues = {
  email: '',
  username: '',
  fullName: '',
  avatarUrl: '',
  userType: '',
}

const types = ['auditor', 'viewer']

const isLoading = ref(true)

if (user.value) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name, avatar_url, user_type')
    .eq('id', user.value.id)
    .single()

  if (profile) {
    initialValues.email = user.value.email || ''
    initialValues.username = profile.username || ''
    initialValues.fullName = profile.full_name || ''
    initialValues.avatarUrl = profile.avatar_url || ''
    initialValues.userType = profile.user_type || ''
  }

  isLoading.value = false
}

const { useFieldModel, handleSubmit, errors, submitCount } = useForm({
  validationSchema: accountFormSchema,
  initialValues,
})

const [email, username, fullName, avatarUrl, userType] = useFieldModel([
  'email',
  'username',
  'fullName',
  'avatarUrl',
  'userType',
])

const { isSubmitted } = useValidation(submitCount)
const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const updateProfile = handleSubmit(async (values) => {
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id) {
      const { error } = await supabase
        .from('profiles')
        .update({
          username: values.username,
          full_name: values.fullName,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.value.id)

      if (error) {
        if (isSupabaseError(error)) {
          throw new SupabaseError(error)
        }

        throw new Error(error?.message || '')
      }
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
  <div class="grid">
    <h1>Account Profile</h1>

    <Card>
      <template #content>
        <form
          v-if="user"
          @submit.prevent="updateProfile"
        >
          <div class="mb-6 grid gap-6 md:grid-cols-2 md:items-start md:gap-x-8">
            <span class="w-full">
              <label for="email">Email</label>
              <InputText
                id="email"
                v-model="email"
                disabled
                readonly
                class="w-full"
                data-testid="account-email-field"
                name="email"
                :class="[{ 'p-invalid': errors.email && isSubmitted }]"
              />
              <small
                v-if="errors.email && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.email }}
              </small>
            </span>

            <span class="w-full">
              <label for="username">Username</label>
              <InputText
                id="username"
                v-model="username"
                class="w-full"
                data-testid="account-username-field"
                name="username"
                :class="[{ 'p-invalid': errors.username && isSubmitted }]"
              />
              <small
                v-if="errors.username && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.username }}
              </small>
            </span>

            <span class="w-full">
              <label for="full_name">Full name</label>
              <InputText
                id="full_name"
                v-model="fullName"
                class="w-full"
                data-testid="account-fullName-field"
                name="fullName"
                :class="[{ 'p-invalid': errors.fullName && isSubmitted }]"
              />
              <small
                v-if="errors.fullName && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.fullName }}
              </small>
            </span>

            <span class="w-full">
              <label for="avatar_url">Avatar url (soon)</label>
              <InputText
                id="avatar_url"
                v-model="avatarUrl"
                class="w-full"
                data-testid="account-avatarUrl-field"
                name="avatarUrl"
                :class="[{ 'p-invalid': errors.avatarUrl && isSubmitted }]"
                disabled
                readonly
              />
              <small
                v-if="errors.avatarUrl && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.avatarUrl }}
              </small>
            </span>

            <span class="w-full">
              <label for="user_type">User type (soon)</label>
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
            </span>
          </div>
          <Button
            :label="isLoading ? 'Loading ...' : 'Update'"
            type="submit"
            class="p-button-lg w-full"
            data-testid="account-submit-button"
            :loading="isLoading"
          />
        </form>
      </template>
    </Card>
  </div>
</template>
