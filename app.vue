<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <AppHeader v-if="user" />
  <main>
    <NuxtPage />
  </main>
</template>
