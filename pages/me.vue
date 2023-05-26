<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
</script>

<template>
  <div class="w-full">
    <h1 class="mb-12 text-6xl font-bold">Hello {{ user?.id }}</h1>
  </div>
</template>
