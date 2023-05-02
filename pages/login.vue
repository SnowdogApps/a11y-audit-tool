<script setup lang="ts">
import { useForm } from 'vee-validate'
import { signInSchema } from '~/validation/schema'

definePageMeta({
  layout: 'simple',
})

const { useFieldModel, handleSubmit, errors, submitCount } = useForm({
  validationSchema: signInSchema,
})
const [email, password] = useFieldModel(['email', 'password'])
const { isSubmitted } = useValidation(submitCount)
const signIn = handleSubmit(() => {
  // TODO
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
    <span class="p-float-label mb-8 w-full">
      <label for="email"> Enter your email </label>
      <InputText
        id="email"
        v-model="email"
        data-testid="login-email-input"
        class="p-inputtext-lg md:w-25rem w-full"
        type="email"
        :class="[{ 'p-invalid': errors.email && isSubmitted }]"
      />
      <small
        v-if="errors.email && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.email }}
      </small>
    </span>
    <span class="p-float-label mb-8 w-full">
      <label for="password">Enter your password</label>
      <Password
        id="password"
        v-model="password"
        data-testid="login-password-input"
        class="p-inputtext-lg md:w-25rem w-full"
        :class="[{ 'p-invalid': errors.password && isSubmitted }]"
        input-class="w-full"
        :feedback="false"
        toggle-mask
      />
      <small
        v-if="errors.password && isSubmitted"
        class="p-error mt-1"
      >
        {{ errors.password }}
      </small>
    </span>
    <div class="mb-4 flex flex-wrap gap-3">
      <div>
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
          class="text-900 mr-8 font-medium"
        >
          Remember Me
        </label>
      </div>
      <a
        class="text-600 hover:text-primary transition-duration-300 ml-auto cursor-pointer cursor-pointer transition-colors"
        >Reset password</a
      >
    </div>
    <button
      class="p-button p-component w-full"
      type="submit"
    >
      <span class="p-button-label">Log In</span>
    </button>
  </form>
</template>
