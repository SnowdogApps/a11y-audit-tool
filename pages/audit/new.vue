<script lang="ts" setup>
definePageMeta({
  middleware: [
    'auth',
    defineNuxtRouteMiddleware(() => {
      const { isAdmin, isAuditor } = useUser()

      if (!isAuditor.value && !isAdmin.value) {
        abortNavigation({
          message: 'Access Denied: Contact Administrator for Assistance.',
        })
      }
    }),
  ],
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
