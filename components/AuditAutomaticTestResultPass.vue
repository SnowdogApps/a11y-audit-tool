<script lang="ts" setup>
import type { AutomaticTestGroupedNodes } from 'types/audit'

defineProps<AutomaticTestGroupedNodes>()
</script>

<template>
  <li class="rounded-md border border-green-600 p-6">
    <h5 class="text-lg font-medium text-green-800">
      {{ id }}
    </h5>
    <p class="mb-4 font-medium">{{ description }}.</p>
    <ul class="divide-y divide-green-600">
      <li
        v-for="({ pageName, nodes }, index) in groupedNodes"
        :key="index"
        class="break-inside-avoid"
        :class="{ 'py-6 last-of-type:pb-0': groupedNodes.length > 1 }"
      >
        <h6
          v-if="pageName"
          class="mb-2 break-all text-base font-medium"
        >
          {{ pageName }}
        </h6>
        <p>
          <span class="font-medium text-green-800">
            {{ nodes.length }}
          </span>
          {{ nodes.length === 1 ? 'element' : 'elements' }} passed the test.
        </p>
      </li>
    </ul>
  </li>
</template>
