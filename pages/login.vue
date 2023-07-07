<script setup lang="ts">
import type { InvalidSubmissionContext } from 'vee-validate'
import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import { displayFirstError } from 'utils/form'

import { signInSchema } from 'validation/schema'

definePageMeta({
  layout: 'simple',
})
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()
const toast = useToast()

const { useFieldModel, handleSubmit, errors, submitCount } = useForm({
  validationSchema: signInSchema,
})
const [email, password] = useFieldModel(['email', 'password'])
const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const signIn = handleSubmit(async ({ email, password }) => {
  const { data, error } = await auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    toast.add({
      severity: 'error',
      summary: error.message,
      life: 3000,
    })
  }

  if (data.user) {
    toast.add({
      severity: 'success',
      summary: 'You successfully login',
      life: 3000,
    })

    await auth.getSession()
  }
}, onInvalidSubmit)

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div class="mb-8">
    <h1 class="Login">Log in</h1>
    <span>Please enter your details</span>
  </div>

  <form
    class="flex flex-col"
    novalidate
    @submit.prevent="signIn"
  >
    <span class="mb-4 w-full">
      <label for="email"> Email </label>
      <InputText
        id="email"
        v-model="email"
        data-testid="login-email-field"
        class="p-inputtext-lg md:w-25rem w-full"
        type="email"
        :class="[{ 'p-invalid': errors.email && isSubmitted }]"
        name="email"
      />
      <small
        v-if="errors.email && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.email }}
      </small>
    </span>
    <span class="mb-4 w-full">
      <label for="password"> Password </label>
      <Password
        v-model="password"
        input-id="password"
        data-testid="login-password-field"
        class="p-inputtext-lg md:w-25rem w-full"
        :class="[{ 'p-invalid': errors.password && isSubmitted }]"
        input-class="w-full"
        :feedback="false"
        toggle-mask
        :pt="{
          input: {
            name: 'password',
          },
        }"
      />
      <small
        v-if="errors.password && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.password }}
      </small>
    </span>
    <div class="mb-4 flex flex-wrap gap-3">
      <NuxtLink
        to="reset-password"
        class="text-600 hover:text-primary transition-duration-300 ml-auto cursor-pointer transition-colors"
      >
        Forgot your password?
      </NuxtLink>
    </div>
    <Button
      label="Log In"
      class="p-button-lg mb-4 w-full"
      type="submit"
      data-testid="login-submit-button"
    />
    <p class="mt-4">
      Don’t have an account yet? <NuxtLink to="/register">Sign up</NuxtLink>
    </p>
  </form>
</template>
