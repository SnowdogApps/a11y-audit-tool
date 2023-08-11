<script lang="ts" setup>
import type { Database } from 'types/supabase'
import type { UserClaim } from 'types/user'

definePageMeta({
  middleware: [
    'auth',
    defineNuxtRouteMiddleware(async () => {
      const supabase = useSupabaseClient<Database>()

      const { data: claims } = (await supabase.rpc(
        'get_my_claims'
      )) as unknown as {
        data: UserClaim
      }

      const isAuditor = claims?.user_role === 'auditor'

      if (!isAuditor) {
        abortNavigation({
          message: 'You are not allowed to be here. Go away!',
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
