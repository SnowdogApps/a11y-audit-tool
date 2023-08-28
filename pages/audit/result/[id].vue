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

const { filteredAudit, optionLists, searchValue, selectedItems } =
  useAuditFilters(audit, formData)
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
              v-for="(type, typeIndex) in filteredAudit"
              :key="`type-${typeIndex}`"
              :header="type.name"
            >
              <div v-if="typeIndex === 'wcagCoveredByTrustedTest'">
                <div class="flex flex-row flex-wrap gap-4 p-4">
                  <div class="flex flex-row flex-wrap gap-2">
                    <span class="flex flex-col">
                      <label
                        for="wcagScList"
                        class="mb-2 text-xs"
                      >
                        WCAG SC
                      </label>
                      <MultiSelect
                        id="wcagScList"
                        v-model="selectedItems.selectedWcagSc"
                        :options="optionLists.wcagScList"
                        filter
                        option-label="name"
                        placeholder="WCAG SC"
                        class="md:w-20rem"
                        :max-selected-labels="3"
                      />
                    </span>
                    <span class="flex flex-col">
                      <label
                        for="levelList"
                        class="mb-2 text-xs"
                      >
                        Level
                      </label>
                      <MultiSelect
                        id="levelList"
                        v-model="selectedItems.selectedLevel"
                        :options="optionLists.levelList"
                        option-label="name"
                        placeholder="Level"
                        class="md:w-20rem"
                        :max-selected-labels="2"
                      />
                    </span>
                    <span class="flex flex-col">
                      <label
                        for="statusList"
                        class="mb-2 text-xs"
                      >
                        Status
                      </label>
                      <MultiSelect
                        id="statusList"
                        v-model="selectedItems.selectedStatus"
                        :options="optionLists.statusList"
                        option-label="name"
                        placeholder="Status"
                        class="md:w-20rem"
                        :max-selected-labels="2"
                      />
                    </span>
                  </div>
                  <div class="p-input-icon-left mt-auto h-10 grow">
                    <i class="pi pi-search" />
                    <InputText
                      v-model="searchValue"
                      placeholder="Search"
                      class="w-full max-w-3xl"
                    />
                  </div>
                </div>
              </div>
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
