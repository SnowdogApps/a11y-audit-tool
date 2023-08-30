<script lang="ts" setup>
// @ts-ignore
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import type { Database } from 'types/supabase'

const props = defineProps<{
  result: Database['public']['Tables']['axe']['Row'] | undefined
}>()

const { audit, isSaving, formData, updateField, saveFormData } = await useAudit(
  props.result
)

const { filteredAudit, optionLists, searchValue, selectedItems } =
  useAuditFilters(audit, formData)
</script>

<template>
  <div
    v-if="result"
    class="flex items-center justify-between gap-10"
  >
    <h2>
      Result: #{{ result.id }} (<NuxtLink
        :to="result.results?.url"
        target="_blank"
        class="mr-auto"
      >
        {{ result.results?.url }} </NuxtLink
      >)
    </h2>
    <Button
      :disabled="isSaving"
      class="p-button w-full shrink justify-center sm:w-auto"
      @click="saveFormData"
    >
      Save
    </Button>
  </div>
  <Card>
    <template #content>
      <ClientOnly>
        <TabView>
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
                      for="categoryList"
                      class="mb-2 text-xs"
                    >
                      Test Category
                    </label>
                    <MultiSelect
                      id="categoryList"
                      v-model="selectedItems.selectedCategory"
                      filter
                      :options="optionLists.categoryList"
                      option-label="name"
                      placeholder="Category"
                      class="md:w-20rem"
                      :max-selected-labels="2"
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
                    placeholder="Search (3 characters minimum)"
                    class="w-full max-w-3xl"
                  />
                </div>
              </div>
            </div>
            <DynamicScroller
              :items="type.tests"
              :min-item-size="317"
              page-mode
            >
              <template #default="{ item: test, index, active }">
                <DynamicScrollerItem
                  :item="test"
                  :active="active"
                  :size-dependencies="[test.results]"
                  :data-index="index"
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
                  <LazyWcagNotCoveredByTrustedTest
                    v-if="typeIndex === 'wcagNotCoveredByTrustedTest'"
                    :test="test"
                  />
                  <LazyAxeResultView
                    v-if="typeIndex === 'axeAdditional'"
                    :test="test"
                  />
                </DynamicScrollerItem>
              </template>
            </DynamicScroller>
          </TabPanel>
        </TabView>

        <template #fallback>
          <Spinner class="mx-auto w-20" />
        </template>
      </ClientOnly>
    </template>
  </Card>
</template>
