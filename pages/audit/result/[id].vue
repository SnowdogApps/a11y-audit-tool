<script lang="ts" setup>
import type { Database } from 'types/supabase'

export interface ListItem {
  name: string
  code: string
}

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const resultId = route.params.id
const selectedItems = ref({
  selectedWcagSc: [],
  selectedLevel: [],
  selectedStatus: [],
})
const optionLists = ref({
  wcagScList: [],
  levelList: [],
  statusList: [],
})
const searchValue = useDebouncedRef('', 300)

const { data: axeResult } = await supabase
  .from('axe')
  .select('*, audits (config)')
  .eq('id', resultId)
  .single()

const { audit, isLoading, formData, updateField, saveFormData } =
  await useAudit(axeResult)

function addToUniqueList(list: ListItem[], item: string): void {
  if (!list.some((listItem) => listItem.name === item)) {
    list.push({
      name: item,
      code: item,
    })
  }
}

// Populate test.info with FormData
function populateInfo(test: any, infoKey: string, formDataKey: string): void {
  test.info[infoKey] = formData.value[test.info['Test ID']][formDataKey]
}

// Get available filters
audit.value.wcagCoveredByTrustedTest.tests.forEach((test: any) => {
  addToUniqueList(optionLists.value.wcagScList, test.info['WCAG SC'])
  addToUniqueList(optionLists.value.levelList, test.info.Level)
})

for (const [, value] of Object.entries(formData.value)) {
  addToUniqueList(optionLists.value.statusList, value.status)
}

// All data in one object makes filtering easier
audit.value.wcagCoveredByTrustedTest.tests.forEach((test) => {
  populateInfo(test, 'status', 'status')
  populateInfo(test, 'manualTestDesc', 'manualTestDesc')
  populateInfo(test, 'recommendationDesc', 'recommendationDesc')
})

const filteredAudits = computed(() => {
  if (
    selectedItems.value.selectedWcagSc.length === 0 &&
    selectedItems.value.selectedLevel.length === 0 &&
    selectedItems.value.selectedStatus.length === 0 &&
    !searchValue.value
  ) {
    return audit.value
  } else {
    // Filters part
    const selectedWcagCodes = new Set(
      (selectedItems.value.selectedWcagSc || []).map(
        (wcagScList) => wcagScList.code
      )
    )
    const selectedLevels = new Set(
      (selectedItems.value.selectedLevel || []).map(
        (levelList) => levelList.code
      )
    )
    const selectedStatuses = new Set(
      (selectedItems.value.selectedStatus || []).map((status) => status.code)
    )

    const filteredTests = audit.value.wcagCoveredByTrustedTest.tests.filter(
      (element) => {
        const filteredWcag =
          selectedWcagCodes.size === 0 ||
          selectedWcagCodes.has(element.info['WCAG SC'])
        const filteredLevel =
          selectedLevels.size === 0 || selectedLevels.has(element.info.Level)
        const filteredStatus =
          selectedStatuses.size === 0 ||
          selectedStatuses.has(element.info.status)

        return filteredWcag && filteredLevel && filteredStatus
      }
    )

    // Search part
    let foundObjects = filteredTests

    if (searchValue.value) {
      foundObjects = []
      filteredTests.forEach((item) => {
        const found = useDeepSearch(item, searchValue.value)
        if (found.length > 0) {
          foundObjects.push(item)
        }
      })
    }

    // Combined results
    const filteredAudit = {
      ...audit.value,
      wcagCoveredByTrustedTest: {
        ...audit.value.wcagCoveredByTrustedTest,
        tests: foundObjects,
      },
    }
    return filteredAudit
  }
})
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
              v-for="(type, typeIndex) in filteredAudits"
              :key="`type-${typeIndex}`"
              :header="type.name"
            >
              <div v-if="typeIndex === 'wcagCoveredByTrustedTest'">
                <div class="flex flex-row flex-wrap gap-4 p-4">
                  <div class="flex flex-row flex-wrap gap-x-2 gap-y-8">
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
