<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="grid">
    <h1>New audit</h1>
  </div>

  <Card>
    <template #content>
      <AuditForm />
    </template>
  </Card>
</template>
