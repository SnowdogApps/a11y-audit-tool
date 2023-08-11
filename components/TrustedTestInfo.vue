<script lang="ts" setup>
defineProps<{
  info: Record<string, string>
}>()
</script>

<template>
  <div>
    <template
      v-for="(tTValue, tTKey) in info"
      :key="tTKey"
    >
      <div v-if="tTKey !== 'CrtID'">
        <span class="mr-2 inline-block font-bold first-letter:uppercase">
          {{ tTKey }}:
        </span>
        <Tag
          v-if="['Level', 'Test ID'].includes(tTKey)"
          :value="tTValue || 'n/a'"
          severity="info"
          rounded
          class="text-xs tracking-wider"
        />
        <span v-else>{{ tTValue || 'n/a' }}</span>
      </div>
    </template>
  </div>
</template>
