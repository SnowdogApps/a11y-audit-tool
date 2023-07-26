<script setup lang="ts">
defineProps<{
  test: Record<string, string | unknown>
}>()

const options = ref([
  { name: 'Pass', value: true },
  { name: 'Failed', value: false },
])
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
        update:vmodel="test.form.testPass"
        :options="options"
        option-label="name"
        option-value="value"
        :aria-labelledby="`category-${test.name}-pass`"
      />
    </div>
    <div class="flex flex-wrap items-center">
      <span class="mr-3">Manual test description</span>
      <Textarea
        v-model="test.form.manualTestDesc"
        rows="5"
        cols="30"
      />
    </div>
    <div class="flex flex-wrap items-center">
      <span class="mr-3">Fixes recommendation description</span>
      <Textarea
        v-model="test.form.fixesRecommendationDesc"
        rows="5"
        cols="30"
      />
    </div>
  </div>
</template>
