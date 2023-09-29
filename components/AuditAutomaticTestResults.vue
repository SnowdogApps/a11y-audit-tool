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
      <h4
        v-if="results.length"
        class="mb-4 text-lg font-medium first-letter:uppercase"
      >
        {{ type }} ({{ results.length }})
      </h4>
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
          <h5
            class="text-lg font-medium"
            :class="{
              'text-green-800': type === 'passes',
              'text-red-800 ': type === 'violations',
            }"
          >
            {{ result.id }}
          </h5>
          <p class="font-medium">{{ result.description }}.</p>
          <p v-if="type === 'violations'">
            <span class="font-medium">Impact: </span>
            {{ result.impact || 'n/a' }}
            <span
              v-if="result.impact"
              class="inline-block h-3 w-3 rounded-full border border-gray-700"
              :class="{
                'bg-red-700': result.impact === 'critical',
                'bg-red-500': result.impact === 'serious',
                'bg-red-300': result.impact === 'moderate',
                'bg-red-100': result.impact === 'minor',
              }"
            />
          </p>
          <ol
            v-if="type === 'violations'"
            title="HTML nodes"
            class="divide-y divide-red-600"
          >
            <li
              v-for="(node, nodeIndex) in result.nodes"
              :key="nodeIndex"
              class="grid grid-cols-[34px_minmax(0,1fr)] py-6 pr-1 first-of-type:pt-3 last-of-type:pb-0"
            >
              <span
                class="font-medium text-red-800"
                aria-hidden="true"
              >
                {{ nodeIndex + 1 }}.
              </span>
              <div>
                <div class="mb-1">
                  <span class="font-medium">How to fix: </span>
                  {{ node.failureSummary }}.
                </div>
                <div class="mb-2 space-x-1 space-y-1">
                  <span class="font-medium">HTML target:</span>
                  <code class="break-words rounded-md bg-gray-100 px-2 py-1">
                    {{ node.target.join(', ') }}
                  </code>
                </div>
                <div class="rounded-md bg-gray-100 p-4">
                  <code class="break-words">
                    {{ node.html }}
                  </code>
                </div>
              </div>
            </li>
          </ol>
          <p
            v-else
            class="mt-3"
          >
            <span class="font-medium text-green-800">
              {{ result.nodes.length }}
            </span>
            HTML {{ result.nodes.length === 1 ? 'node' : 'nodes' }} passed the
            test.
          </p>
        </li>
      </ul>
    </li>
  </ul>
</template>
