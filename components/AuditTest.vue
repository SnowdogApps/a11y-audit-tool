<script lang="ts" setup>
import type { AuditItem } from 'types/audit'
import type { FormData, FormDataField } from 'types/supabase'

const props = defineProps<{
  test: AuditItem
  formDataItem: FormData[string]
}>()

defineEmits<{
  (
    e: 'update-field',
    value: {
      field: FormDataField
      value: string
    }
  ): void
}>()

const status = computed(() => props.formDataItem.status)
const notes = computed(() => props.formDataItem.notes)
const manualTestResultsStatus = computed(
  () => props.formDataItem.manualTestResultsStatus
)
const manualTestIssues = computed(() => props.formDataItem.manualTestIssues)
const manualTestRecommendedFixes = computed(
  () => props.formDataItem.manualTestRecommendedFixes
)

const { $toCamelCase } = useNuxtApp()

const getFieldId = (suffix: string) =>
  `category-${$toCamelCase(props.test.id)}-${suffix}`
</script>

<template>
  <div class="pb-6">
    <Card>
      <template #content>
        <div class="space-y-8">
          <div
            class="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr]"
          >
            <TrustedTestInfo :info="test.info" />
            <div class="space-y-4">
              <div>
                <label
                  :for="getFieldId('status')"
                  class="mb-2 block font-medium"
                >
                  Status
                </label>
                <Dropdown
                  class="w-full"
                  :model-value="status"
                  :options="[
                    'Not tested',
                    'Not applicable',
                    'Passed',
                    'Failed',
                  ]"
                  :input-id="getFieldId('status')"
                  @update:model-value="
                    (value: string) =>
                      $emit('update-field', {
                        field: 'status',
                        value: value,
                      })
                  "
                />
              </div>
              <div>
                <label
                  :for="getFieldId('notes')"
                  class="mb-2 block font-medium"
                >
                  Notes
                </label>
                <Textarea
                  :id="getFieldId('notes')"
                  :model-value="notes"
                  class="w-full"
                  rows="10"
                  @update:model-value="
                    (value: string) =>
                      $emit('update-field', {
                        field: 'notes',
                        value,
                      })
                  "
                />
              </div>
            </div>
          </div>
          <Accordion>
            <AccordionTab
              :disabled="test.automaticTestResultsStatus === 'Not applicable'"
            >
              <template #header>
                <span class="mr-3">Automatic Test Results</span>
                <Tag
                  :value="test.automaticTestResultsStatus"
                  rounded
                  :severity="
                    test.automaticTestResultsStatus === 'Passed'
                      ? 'success'
                      : test.automaticTestResultsStatus === 'Failed'
                      ? 'danger'
                      : 'info'
                  "
                />
              </template>
              <AuditAutomaticTestResults
                :grouped-results="test.automaticTestGroupedResults"
              />
            </AccordionTab>
            <AccordionTab>
              <template #header>
                <span class="mr-3">Manual Test Results</span>
                <Tag
                  :value="manualTestResultsStatus"
                  rounded
                  :severity="
                    manualTestResultsStatus === 'Passed'
                      ? 'success'
                      : manualTestResultsStatus === 'Failed'
                      ? 'danger'
                      : manualTestResultsStatus === 'Not tested'
                      ? 'primary'
                      : 'info'
                  "
                />
              </template>
              <div class="space-y-4">
                <div>
                  <label
                    :for="getFieldId('manual-test-results-status')"
                    class="mb-2 block font-medium"
                  >
                    Status
                  </label>
                  <Dropdown
                    class="w-full md:max-w-[200px]"
                    :model-value="manualTestResultsStatus"
                    :options="[
                      'Not tested',
                      'Not applicable',
                      'Passed',
                      'Failed',
                    ]"
                    :input-id="getFieldId('manualTestResultsStatus')"
                    @update:model-value="
                      (value: string) =>
                        $emit('update-field', {
                          field: 'manualTestResultsStatus',
                          value: value,
                        })
                    "
                  />
                </div>
                <div class="grid gap-x-10 gap-y-4 xl:grid-cols-2">
                  <div>
                    <label
                      :for="getFieldId('manual-test-issues')"
                      class="mb-2 block font-medium"
                    >
                      Manual test issues
                    </label>
                    <Textarea
                      :id="getFieldId('manual-test-issues')"
                      :model-value="manualTestIssues"
                      class="w-full"
                      rows="10"
                      @update:model-value="
                        (value: string) =>
                          $emit('update-field', {
                            field: 'manualTestIssues',
                            value: value,
                          })
                      "
                    />
                  </div>
                  <div>
                    <label
                      :for="getFieldId('manual-test-recommended-fixes')"
                      class="mb-2 block font-medium"
                    >
                      Recommended fixes
                    </label>
                    <Textarea
                      :id="getFieldId('manual-test-recommended-fixes')"
                      :model-value="manualTestRecommendedFixes"
                      class="w-full"
                      rows="10"
                      @update:model-value="
                        (value: string) =>
                          $emit('update-field', {
                            field: 'manualTestRecommendedFixes',
                            value: value,
                          })
                      "
                    />
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </template>
    </Card>
  </div>
</template>