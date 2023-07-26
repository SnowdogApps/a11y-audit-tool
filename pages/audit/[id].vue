<script lang="ts" setup>
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const auditId = route.params.id

const axeResults = ref<unknown[]>([])
const { data } = await supabase
  .from('axe')
  .select('*, audits (config)')
  .eq('audit_id', auditId)

axeResults.value = data || []
</script>

<template>
  <div class="grid">
    <h1>audit #{{ route.params.id }}</h1>

    <Card>
      <template #title>Results list</template>
      <template #content>
        <div
          v-if="axeResults.length"
          class="grid w-full"
        >
          <a
            v-for="(result, index) in axeResults"
            :key="`result-${index}`"
            class="my-3 w-full border p-3 hover:border-gray-900"
            :href="`/audit/result/${result.id}`"
          >
            {{ result.id }} - {{ result.audits.config.pages[0].url }} -
            {{ result.audits.config.viewports[0] }}
          </a>
        </div>
        <p v-else>No results for audit {{ auditId }}</p>
      </template>
    </Card>
  </div>
</template>
