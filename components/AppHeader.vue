<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <header class="flex items-center justify-center md:justify-between">
    <div class="flex items-center">
      <button
        v-if="user"
        type="button"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </header>
</template>
