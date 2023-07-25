<script lang="ts" setup>
import AxeResultView from '~/components/AxeResultView.vue'

defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <h2>Category: {{ test.name }}</h2>
  <div>WCAG 508 SC: {{ [...test.wcag508SC].join(', ') }}</div>
  <div
    v-for="(trustedTest, trustedTestIndex) in test.trustedTests"
    :key="`tt-${trustedTestIndex}`"
    class="mb-4 border-b-2 py-2"
  >
    <div
      v-for="(value, key) in trustedTest"
      :key="key"
    >
      <span class="mr-2 inline-block font-bold first-letter:uppercase">
        {{ key.replace('_', ' ') }}:
      </span>

      <Tag
        v-if="['type', 'level', 'TestID'].includes(key)"
        :value="value"
        severity="info"
        rounded
        class="text-xs tracking-wider"
      />

      <template v-else-if="key === 'filteredResultsByWcagSC'">
        <ul
          v-if="value.length"
          class="ml-4"
        >
          <li
            v-for="(filteredTest, testIndex) in value"
            :key="`axe-${testIndex}`"
            class="mb-4 border-b-2 py-2"
          >
            <AxeResultView :test="filteredTest" />
          </li>
        </ul>
        <span v-else>empty</span>
      </template>

      <template v-else-if="key === 'filteredResultsByTT'">
        <ul
          v-if="value.length"
          class="ml-4"
        >
          <li
            v-for="(filteredTest, testIndex) in value"
            :key="`axe-${testIndex}`"
            class="mb-4 border-b-2 py-2"
          >
            <AxeResultView :test="filteredTest" />
          </li>
        </ul>
        <span v-else>empty</span>
      </template>

      <span v-else>{{ value || 'n/a' }}</span>
    </div>
  </div>
</template>
