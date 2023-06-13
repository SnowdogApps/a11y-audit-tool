<script setup lang="ts">
import { getFormData } from 'utils/form'
import type { AuthUser } from 'types/auth'

const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

const doAuth = async (event: Event) => {
  if (event.target instanceof HTMLFormElement) {
    const { email, password } = getFormData<AuthUser>(event.target)

    await auth.signInWithPassword({
      email,
      password,
    })
  }
}

watchEffect(() => {
  if (user.value) {
    navigateTo('/me')
  }
})
</script>

<template>
  <h1>Dashboard</h1>
  <NuxtLink to="login"> Log In </NuxtLink><br />
  <NuxtLink to="register"> Register </NuxtLink>

  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold">
      Sign in to your account
    </h2>

    <form
      class="flex flex-col"
      @submit.prevent="doAuth"
    >
      <input
        class="text-black"
        type="text"
        name="email"
        placeholder="john@do.eee"
      />
      <input
        class="text-black"
        type="password"
        name="password"
        placeholder="**********"
      />
      <input
        class="text-black"
        type="submit"
        value="Login"
      />
    </form>
  </div>
</template>
