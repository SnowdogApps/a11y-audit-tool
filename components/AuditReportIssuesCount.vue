<script lang="ts" setup>
defineProps<{
  count: number
}>()
</script>

<template>
  <p
    class="flex w-full flex-col items-center justify-between gap-1 rounded-md border-4 border-red-600 bg-red-50 font-medium md:aspect-square"
  >
    <span
      class="w-full bg-red-600 p-2 text-center text-xl uppercase text-white"
    >
      issues
    </span>
    <span
      class="flex flex-1 items-center justify-center p-6 text-7xl text-red-600"
    >
      {{ count }}
    </span>
  </p>
</template>
