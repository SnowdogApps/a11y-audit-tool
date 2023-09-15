<script lang="ts" setup>
import type { PageStatus } from 'types/audit-report'

defineProps<{
  pageStatuses: PageStatus[]
}>()
</script>

<template>
  <div class="rounded-md border p-6">
    <h3 class="text-lg font-medium">Test status</h3>
    <ul class="divide-y">
      <li
        v-for="({ status, pageName }, index) in pageStatuses"
        :key="index"
        class="py-4 last-of-type:pb-0"
      >
        <div class="mb-2 break-all text-sm font-medium">
          {{ pageName }}
        </div>
        <Tag
          class="w-full !text-base"
          :value="status"
          :severity="
            status === 'Passed'
              ? 'success'
              : status === 'Failed'
              ? 'danger'
              : status === 'Not tested'
              ? 'primary'
              : 'info'
          "
        />
      </li>
    </ul>
  </div>
</template>
