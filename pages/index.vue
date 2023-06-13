<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <h1>Dashboard</h1>
  <NuxtLink to="login"> Log In </NuxtLink><br />
  <NuxtLink to="register"> Register </NuxtLink>
</template>
