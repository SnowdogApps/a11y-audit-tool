<script setup lang="ts">
// const user = useSupabaseUser()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <Toast />
  </ClientOnly>
</template>
