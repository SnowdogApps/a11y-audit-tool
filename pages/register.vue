<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

import { useForm } from 'vee-validate'
import { signUpSchema } from '~/validation/schema'

definePageMeta({
  layout: 'simple',
})

const { useFieldModel, handleSubmit, errors, submitCount } = useForm({
  validationSchema: signUpSchema,
})
const [email, newPassword] = useFieldModel(['email', 'newPassword'])
const { isSubmitted } = useValidation(submitCount)
const signUp = handleSubmit(() => {
  // TODO
})
</script>

<template>
  <div class="mb-4">
    <h1 class="Login">Register</h1>
    <span>Let's get started</span>
  </div>

  <form
    class="flex flex-col"
    novalidate
    @submit.prevent="signUp"
  >
    <span class="mb-8 w-full">
      <label for="email"> Email </label>
      <InputText
        id="email"
        v-model="email"
        data-test-id="register-email-field"
        class="p-inputtext-lg md:w-25rem w-full"
        :class="[{ 'p-invalid': errors.email && isSubmitted }]"
      />
      <small
        v-if="errors.email && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.email }}
      </small>
    </span>

    <span class="mb-8 w-full">
      <label for="new-password"> Password </label>
      <Password
        id="password"
        v-model="newPassword"
        data-testid="register-password-field"
        class="p-inputtext-lg md:w-25rem w-full"
        :class="[{ 'p-invalid': errors.newPassword && isSubmitted }]"
        input-class="w-full"
        :feedback="false"
        toggle-mask
      />
      <small
        v-if="errors.newPassword && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.newPassword }}
      </small>
    </span>

    <div class="mb-4 flex flex-wrap">
      <div class="p-checkbox p-component mr-2">
        <div class="p-hidden-accessible">
          <input
            type="checkbox"
            name="checkbox"
          />
        </div>

        <div class="p-checkbox-box">
          <span class="p-checkbox-icon" />
        </div>
      </div>

      <label
        for="checkbox"
        class="text-900 mr-2 font-medium"
        >I have read the
      </label>

      <a class="text-600 hover:text-primary cursor-pointer cursor-pointer">
        Terms and Conditions
      </a>
    </div>
    <Button
      class="p-button-lg mb-4 w-full"
      type="submit"
      label="Sign Up"
      data-testid="register-submit-button"
    />

    <span class="text-600 font-medium">
      Already have an account?
      <NuxtLink
        to="/login"
        class="text-900 hover:text-primary transition-duration-300 cursor-pointer font-semibold transition-colors"
      >
        Login
      </NuxtLink></span
    >
  </form>
</template>
