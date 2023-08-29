<script setup lang="ts">
import type { FormData, FormDataField } from 'types/supabase'

const props = defineProps<{
  testName: string
  testId: string
  formData: FormData
}>()

defineEmits<{
  (
    e: 'update-field',
    value: {
      id: string
      field: FormDataField
      value: string
    }
  ): void
}>()

const status = computed(() => props.formData[props.testId].status)
const manualTestDesc = computed(
  () => props.formData[props.testId].manualTestDesc
)
const recommendationDesc = computed(
  () => props.formData[props.testId].recommendationDesc
)

const { $toCamelCase } = useNuxtApp()

const getFieldId = (suffix: string) =>
  `category-${$toCamelCase(props.testName)}-${suffix}`
</script>

<template>
  <div>
    <span
      :id="getFieldId('pass')"
      class="mb-4 block font-bold"
    >
      Status
    </span>
    <Dropdown
      class="w-full"
      :model-value="status"
      :options="['Not tested', 'Not applicable', 'Passed', 'Failed']"
      :aria-labelledby="getFieldId('pass')"
      @update:model-value="
        (value: string) =>
          $emit('update-field', {
            id: testId,
            field: 'status',
            value: value,
          })
      "
    />
  </div>
  <div>
    <label
      :for="getFieldId('manual-desc')"
      class="mb-4 block font-bold"
    >
      Manual test
    </label>
    <Textarea
      :id="getFieldId('manual-desc')"
      class="w-full"
      :model-value="manualTestDesc"
      rows="10"
      @update:model-value="
        (value: string) =>
          $emit('update-field', {
            id: testId,
            field: 'manualTestDesc',
            value: value,
          })
      "
    />
  </div>
  <div>
    <label
      :for="getFieldId('recommendation-desc')"
      class="mb-4 block font-bold"
    >
      Fixes recommendation
    </label>
    <Textarea
      :id="getFieldId('recommendation-desc')"
      :model-value="recommendationDesc"
      class="w-full"
      rows="10"
      @update:model-value="
        (value: string) =>
          $emit('update-field', {
            id: testId,
            field: 'recommendationDesc',
            value: value,
          })
      "
    />
  </div>
</template>
