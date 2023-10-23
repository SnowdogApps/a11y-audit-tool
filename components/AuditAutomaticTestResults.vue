<script lang="ts" setup>
import type { AutomaticTestGroupedResult } from 'types/audit'
import type { Result } from 'types/supabase'

defineProps<{
  groupedResults: AutomaticTestGroupedResult[]
}>()

const getResultCount = (results: Result[]) => {
  return results.reduce((acc, result) => acc + result.nodes.length, 0)
}
</script>

<template>
  <ul class="space-y-4">
    <li
      v-for="{ type, results } in groupedResults"
      :key="type"
    >
      <h4
        v-if="results.length"
        class="mb-4 text-lg font-medium first-letter:uppercase"
      >
        {{ type }}
        <span
          :class="{
            'text-red-800': type === 'issues',
            'text-green-800': type === 'passes',
          }"
        >
          ({{ getResultCount(results) }})
        </span>
      </h4>
      <ul
        v-if="results.length"
        class="space-y-4"
      >
        <template
          v-for="(result, index) in results"
          :key="index"
        >
          <AuditAutomaticTestResultIssue
            v-if="type === 'issues'"
            :id="result.id"
            :description="result.description"
            :impact="result.impact"
            :grouped-nodes="[{ nodes: result.nodes }]"
          />
          <AuditAutomaticTestResultPass
            v-else
            :id="result.id"
            :description="result.description"
            :impact="result.impact"
            :grouped-nodes="[{ nodes: result.nodes }]"
          />
        </template>
      </ul>
    </li>
  </ul>
</template>
