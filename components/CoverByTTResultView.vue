<script lang="ts" setup>
defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <div
    v-for="(trustedTest, trustedTestIndex) in test.trustedTests"
    :key="`tt-${trustedTestIndex}`"
    class="mb-4 border-b-2 py-2"
  >
    <div
      v-for="(tTValue, tTKey) in trustedTest"
      :key="tTKey"
    >
      <span class="mr-2 inline-block font-bold first-letter:uppercase">
        {{ tTKey.replace('_', ' ') }}:
      </span>

      <Tag
        v-if="['type', 'level', 'TestID'].includes(tTKey)"
        :value="tTValue"
        severity="info"
        rounded
        class="text-xs tracking-wider"
      />

      <template v-else-if="tTKey === 'filteredResultsByWcagSC'">
        <ul
          v-if="tTValue.length"
          class="ml-4"
        >
          <li
            v-for="(filteredTest, testIndex) in tTValue"
            :key="`axe-${testIndex}`"
            class="mb-4 border-b-2 py-2"
          >
            <AxeResultView :test="filteredTest" />
          </li>
        </ul>
        <span v-else>empty</span>
      </template>

      <template v-else-if="tTKey === 'filteredResultsByTT'">
        <ul
          v-if="tTValue.length"
          class="ml-4"
        >
          <li
            v-for="(filteredTest, testIndex) in tTValue"
            :key="`axe-${testIndex}`"
            class="mb-4 border-b-2 py-2"
          >
            <AxeResultView :test="filteredTest" />
          </li>
        </ul>
        <span v-else>empty</span>
      </template>

      <span v-else>{{ tTValue || 'n/a' }}</span>
    </div>
  </div>
</template>
