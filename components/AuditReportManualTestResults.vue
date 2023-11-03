<script lang="ts" setup>
import type { ManualTestResult } from 'types/audit-report'

defineProps<{
  type: string
  manualTestResults: ManualTestResult[]
}>()
</script>

<template>
  <li
    class="break-inside-avoid rounded-md border p-6"
    :class="{
      'border-red-600': type === 'issues',
      'border-green-600': type === 'passes',
    }"
  >
    <h5
      v-if="['issues', 'passes'].includes(type)"
      class="text-lg font-medium"
      :class="{
        'text-red-800': type === 'issues',
        'text-green-800': type === 'passes',
      }"
    >
      Manual tests
    </h5>
    <ul
      class="divide-y"
      :class="{
        'divide-red-600': type === 'issues',
        'divide-green-600': type === 'passes',
      }"
    >
      <li
        v-for="(manualTestResult, manualTestResultIndex) in manualTestResults"
        :key="manualTestResultIndex"
        class="space-y-4 py-4 last-of-type:pb-0"
      >
        <h5
          v-if="manualTestResult.pageName"
          class="break-words text-base font-medium"
        >
          {{ manualTestResult.pageName }}
        </h5>
        <div>
          <p v-if="manualTestResult.issues.length">
            <span class="font-medium">Issues:</span>
            {{ manualTestResult.issues }}
          </p>
          <p v-if="manualTestResult.recommendedFixes.length">
            <span class="font-medium"> Recommended fixes: </span>
            {{ manualTestResult.recommendedFixes }}
          </p>
        </div>
      </li>
    </ul>
  </li>
</template>
