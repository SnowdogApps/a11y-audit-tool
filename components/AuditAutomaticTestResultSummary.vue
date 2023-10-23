<script setup lang="ts">
defineProps<{
  totalCount: number
  issuesCount: number
  passesCount: number
}>()
</script>

<template>
  <div class="rounded-md border p-6">
    <h3 class="mb-2 text-lg font-medium">
      Total tested elements: {{ totalCount }}
    </h3>
    <div class="space-y-4">
      <div
        v-for="{ name, count } in [
          { name: 'Issues', count: issuesCount },
          { name: 'Passes', count: passesCount },
        ]"
        :key="name"
      >
        <h4 class="mb-2 text-sm font-medium">{{ name }}</h4>
        <div class="grid grid-cols-[1fr_48px]">
          <ProgressBar
            :value="(count / totalCount) * 100"
            :show-value="false"
            :class="{
              '[&>.p-progressbar-value]:!bg-red-600': name === 'Issues',
              '[&>.p-progressbar-value]:!bg-green-600': name === 'Passes',
            }"
          />
          <span class="text-right font-medium">{{ count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
