<script lang="ts" setup>
import type { Database } from 'types/supabase'
import type { Audit } from 'types/database'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const auditId = route.params.id

const { data } = await supabase
  .from('axe')
  .select('*, audits (config)')
  .eq('audit_id', auditId)

const axeResultByPages = ref<Audit>(data)
const auditsByPage = ref([])

axeResultByPages.value.forEach((page) => {
  const { audit, resultTypesCount } = useAudit(page.results)

  auditsByPage.value.push({
    url: page.results.url,
    audit: audit.value,
    resultTypesCount,
  })
})
</script>

<template>
  <div class="grid">
    <h1>Result of Audit #{{ auditId }}</h1>
  </div>

  <Card>
    <template #content>
      <Accordion v-if="auditsByPage.length">
        <template
          v-for="(page, index) in auditsByPage"
          :key="`page-${index}`"
        >
          <AccordionTab :header="page.url">
            <pre>{{ page.resultTypesCount }}</pre>
          </AccordionTab>
        </template>
      </Accordion>
      <p v-else>No results for audit {{ auditId }}</p>
    </template>
  </Card>
</template>
