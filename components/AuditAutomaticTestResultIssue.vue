<script lang="ts" setup>
import type { AutomaticTestGroupedNodes } from 'types/audit'

const props = defineProps<AutomaticTestGroupedNodes>()

const isCollapsible = computed(() => props.groupedNodes[0]?.pageName)
</script>

<template>
  <li class="rounded-md border border-red-600 p-6">
    <h5 class="text-lg font-medium text-red-800">
      {{ id }}
    </h5>
    <p class="font-medium">{{ description }}.</p>
    <p>
      <span class="font-medium">Impact: </span>
      {{ impact || 'n/a' }}
      <span
        v-if="impact"
        class="inline-block h-3 w-3 rounded-full border border-gray-700"
        :class="{
          'bg-red-700': impact === 'critical',
          'bg-red-500': impact === 'serious',
          'bg-red-300': impact === 'moderate',
          'bg-red-100': impact === 'minor',
        }"
      />
    </p>
    <Component
      :is="isCollapsible ? 'Accordion' : 'div'"
      :multiple="true"
      :class="{ 'mt-6': isCollapsible }"
    >
      <Component
        :is="isCollapsible ? 'AccordionTab' : 'div'"
        v-for="({ pageName, nodes }, index) in groupedNodes"
        :key="index"
      >
        <template #header>
          <span>
            <span class="break-all">
              {{ pageName }}
            </span>
            <span class="text-red-800"> ({{ nodes.length }})</span>
          </span>
        </template>
        <ol
          title="HTML nodes"
          class="divide-y divide-red-600"
        >
          <li
            v-for="(node, nodeIndex) in nodes"
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
      </Component>
    </Component>
  </li>
</template>
