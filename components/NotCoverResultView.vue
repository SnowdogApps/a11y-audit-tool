<script lang="ts" setup>
import AxeResultView from '~/components/AxeResultView.vue'

defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <div
    v-for="(testValue, testKey) in test"
    :key="`test-${testKey}`"
  >
    <span class="mr-2 inline-block font-bold first-letter:uppercase">
      {{ testKey.replace('_', ' ') }}:
    </span>
    <a
      v-if="['helpUrl', 'url'].includes(testKey)"
      :href="testValue"
    >
      {{ testValue }}
    </a>

    <Tag
      v-else-if="['type', 'level'].includes(testKey)"
      :value="testValue"
      severity="info"
      rounded
      class="text-xs tracking-wide"
    />
    <ul
      v-else-if="testKey === 'references'"
      class="mb-2 ml-4"
    >
      <li
        v-for="(ref, refIndex) in testValue"
        :key="`reference-${refIndex}`"
      >
        <a :href="ref.url">
          {{ ref.title }}
        </a>
      </li>
    </ul>

    <ul
      v-else-if="testKey === 'notes'"
      class="ml-4"
    >
      <li
        v-for="(note, noteIndex) in testValue"
        :key="`note-${noteIndex}`"
        class="mb-4 border-b-2 py-2"
      >
        <div
          v-for="(prop, key) in note"
          :key="`note-prop-${key}`"
        >
          <span class="mr-2 inline-block font-bold first-letter:uppercase">
            {{ key }}:
          </span>
          <span>
            {{ prop }}
          </span>
        </div>
      </li>
    </ul>

    <ul
      v-else-if="testKey === 'special_cases'"
      class="ml-4"
    >
      <li
        v-for="(caseItem, caseIndex) in testValue"
        :key="`case-${caseIndex}`"
        class="mb-4 border-b-2 py-2"
      >
        <div
          v-for="(prop, propKey) in caseItem"
          :key="`case-prop-${propKey}`"
        >
          <span class="mr-4 inline-block font-bold first-letter:uppercase"
            >{{ propKey }}:</span
          >
          <span>
            {{ prop }}
          </span>
        </div>
      </li>
    </ul>

    <ul
      v-else-if="testKey === 'axeTests'"
      class="ml-4"
    >
      <li
        v-for="(axeTest, testIndex) in testValue"
        :key="`axe-${testIndex}`"
        class="mb-4 border-b-2 py-2"
      >
        <AxeResultView :test="axeTest" />
      </li>
    </ul>

    <span v-else>{{ testValue || 'n/a' }}</span>
  </div>
</template>
