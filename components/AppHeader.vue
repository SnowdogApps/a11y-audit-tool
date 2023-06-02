<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const { data: isAdmin } = await client.rpc('is_claims_admin')

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <header
    class="flex items-center justify-center border-solid border-black md:justify-between"
  >
    <nav>
      <ul class="flex list-none">
        <li class="mr-2">
          <NuxtLink
            class="text-black"
            to="/me"
          >
            Settings
          </NuxtLink>
        </li>
        <li class="mr-2">
          <NuxtLink
            class="text-black"
            to="/audits"
          >
            Audits
          </NuxtLink>
        </li>
        <li class="mr-2">
          <NuxtLink
            class="text-black"
            to="/projects"
          >
            Projects
          </NuxtLink>
        </li>
        <li v-if="isAdmin">
          <NuxtLink
            class="text-black"
            to="/admin"
          >
            Admin
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center">
      <button
        v-if="user"
        type="button"
        class="mx-2"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </header>
</template>
