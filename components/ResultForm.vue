<script setup lang="ts">
const props = defineProps<{
  test: Record<string, string | unknown>
}>()

const options = ref([
  { name: 'Pass', value: true },
  { name: 'Failed', value: false },
])

const { updateField, formData } = useAudit()
const testPass = computed(() => formData.value[props.test.id].testPass)
const manualTestDesc = computed(
  () => formData.value[props.test.id].manualTestDesc
)
const recommendationDesc = computed(
  () => formData.value[props.test.id].recommendationDesc
)
</script>

<template>
  <div class="grid grid-flow-row auto-rows-min gap-2">
    <div class="flex flex-wrap items-center">
      <span
        :id="`category-${test.name}-pass`"
        class="mr-3"
        >Category Pass</span
      >
      <SelectButton
        :model-value="testPass"
        :options="options"
        option-label="name"
        option-value="value"
        :aria-labelledby="`category-${test.name}-pass`"
        @update:modelValue="(value) => updateField(test.id, 'testPass', value)"
      />
    </div>
    <div class="flex flex-wrap items-center">
      <span class="mr-3">Manual test description</span>
      <Textarea
        :model-value="manualTestDesc"
        rows="5"
        cols="30"
        @update:modelValue="
          (value) => updateField(test.id, 'manualTestDesc', value)
        "
      />
    </div>
    <div class="flex flex-wrap items-center">
      <span class="mr-3">Fixes recommendation description</span>
      <Textarea
        :model-value="recommendationDesc"
        rows="5"
        cols="30"
        @update:modelValue="
          (value) => updateField(test.id, 'recommendationDesc', value)
        "
      />
    </div>
  </div>
</template>
