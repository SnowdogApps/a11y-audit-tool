<script lang="ts" setup>
import type { AutomaticTestGroupedResult } from 'types/audit'

defineProps<{
  groupedResults: AutomaticTestGroupedResult[]
}>()
</script>

<template>
  <ul class="space-y-4">
    <li
      v-for="{ type, results } in groupedResults"
      :key="type"
    >
      <div
        v-if="results.length"
        class="mb-4 text-lg font-medium first-letter:uppercase"
      >
        {{ type }} ({{ results.length }})
      </div>
      <ul
        v-if="results.length"
        class="space-y-4"
      >
        <li
          v-for="(result, index) in results"
          :key="index"
          class="rounded-md border p-6"
          :class="{
            'border-green-600': type === 'passes',
            'border-red-600 ': type === 'violations',
          }"
        >
          <ul class="space-y-1">
            <li><span class="font-medium">Id: </span>{{ result.id }}</li>
            <li v-if="type === 'violations'">
              <span class="font-medium">Impact: </span>
              {{ result.impact || 'n/a' }}
              <div
                v-if="result.impact"
                class="inline-block h-3 w-3 rounded-full border border-gray-700"
                :class="{
                  'bg-red-700': result.impact === 'critical',
                  'bg-red-500': result.impact === 'serious',
                  'bg-red-300': result.impact === 'moderate',
                  'bg-red-100': result.impact === 'minor',
                }"
              />
            </li>
            <ol
              title="HTML nodes"
              :class="{
                'divide-y divide-red-600 ': type === 'violations',
              }"
            >
              <li
                v-for="(node, nodeIndex) in result.nodes"
                :key="nodeIndex"
                :class="{
                  'py-2': type === 'passes',
                  'py-4 ': type === 'violations',
                }"
              >
                <ul class="space-y-4">
                  <li class="space-y-4">
                    <div class="space-x-1 space-y-1">
                      <span
                        class="font-medium"
                        :class="{
                          'text-green-600': type === 'passes',
                          'text-red-600 ': type === 'violations',
                        }"
                        aria-hidden="true"
                      >
                        {{ nodeIndex + 1 }}.
                      </span>
                      <span
                        v-if="type === 'violations'"
                        class="font-medium"
                      >
                        HTML target:
                      </span>
                      <code
                        class="break-words rounded-md bg-gray-100 px-2 py-1"
                      >
                        {{ node.target.join(', ') }}
                      </code>
                    </div>
                    <div
                      v-if="type === 'violations'"
                      class="rounded-md border border-red-300 p-4"
                    >
                      <code class="break-words">
                        {{ node.html }}
                      </code>
                    </div>
                  </li>
                  <li v-if="type === 'violations'">
                    <span class="font-medium">How to fix: </span>
                    {{ node.failureSummary }}
                  </li>
                </ul>
              </li>
            </ol>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
