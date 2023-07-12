<script lang="ts" setup>
import type { Database } from 'types/supabase'
import type { Audit } from 'types/database'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const auditId = route.params.id

const audit = ref<Audit[]>([])
const { data } = await supabase.from('audits').select('*').eq('id', auditId)

if (!data?.length) {
  throw createError({ statusCode: 404, statusMessage: 'Audit Not Found' })
}

audit.value = data || []
</script>

<template>
  <div class="grid">
    <h1>Edit audit #{{ route.params.id }}</h1>
  </div>

  <Card>
    <template #content>
      page in preparation
      <pre>{{ audit[0] }}</pre>
    </template>
  </Card>
</template>
