<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
</script>

<template>
  <div class="grid">
    <h1>Edit audit #{{ route.params.id }}</h1>
  </div>

  <Card>
    <template #content> page in preparation </template>
  </Card>
</template>
