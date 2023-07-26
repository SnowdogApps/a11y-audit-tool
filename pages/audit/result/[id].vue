<script lang="ts" setup>
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const resultId = route.params.id

const { data: axeResult } = await supabase
  .from('axe')
  .select('*, audits (config)')
  .eq('id', resultId)
  .single()

const { audit } = useAudit(axeResult?.results)
</script>

<template>
  <div class="grid grid-cols-1">
    <h1>
      Result of Audit #{{ axeResult.audit_id }} - {{ axeResult.results.url }}
    </h1>

    <Card>
      <template #content>
        <ClientOnly>
          <TabView v-if="audit">
            <TabPanel
              v-for="(type, typeIndex) in audit"
              :key="`type-${typeIndex}`"
              :header="type.name"
            >
              <div
                v-for="(test, testIndex) in type.tests"
                :key="`test-${testIndex}`"
                class="border-b-2 py-2"
              >
                <CoverByTTResultView
                  v-if="typeIndex === 'wcagCoveredByTrustedTest'"
                  :test="test"
                />

                <NotCoverResultView
                  v-if="typeIndex === 'wcagNotCover'"
                  :test="test"
                />

                <AxeResultView
                  v-if="typeIndex === 'axeAdditional'"
                  :test="test"
                />
              </div>
            </TabPanel>
          </TabView>

          <template #fallback>
            <p>Loading data...</p>
          </template>
        </ClientOnly>
      </template>
    </Card>
  </div>
</template>
