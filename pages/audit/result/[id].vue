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

const { audit, isLoading, formData, updateField, saveFormData } =
  await useAudit(axeResult)
</script>

<template>
  <div class="grid grid-cols-1">
    <div
      class="flex flex-wrap py-2 sm:flex-nowrap sm:items-end sm:justify-between"
    >
      <h1 class="mb-2 sm:mb-0">
        Result of Audit #{{ axeResult.audit_id }} - {{ axeResult.results.url }}
      </h1>

      <Button
        :disabled="isLoading"
        class="p-button w-full shrink justify-center sm:w-auto"
        @click="saveFormData"
      >
        Save
      </Button>
    </div>
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
                class="border-b-2 py-8"
              >
                <WcagCoveredByTrustedTest
                  v-if="typeIndex === 'wcagCoveredByTrustedTest'"
                  :test="test"
                >
                  <ResultForm
                    :test-id="test.info['Test ID']"
                    :test-name="test.info['Test Name']"
                    :form-data="formData"
                    @update-field="(value) => updateField(value)"
                  />
                </WcagCoveredByTrustedTest>
                <WcagNotCoveredByTrustedTest
                  v-if="typeIndex === 'wcagNotCoveredByTrustedTest'"
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
            <Spinner class="mx-auto w-20" />
          </template>
        </ClientOnly>
      </template>
    </Card>
  </div>
</template>
