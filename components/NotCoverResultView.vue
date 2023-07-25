<script lang="ts" setup>
import AxeResultView from '~/components/AxeResultView.vue'

defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <div
    v-for="(value, key) in test"
    :key="key"
  >
    <span class="mr-2 inline-block font-bold first-letter:uppercase">
      {{ key.replace('_', ' ') }}:
    </span>
    <a
      v-if="['helpUrl', 'url'].includes(key)"
      :href="value"
    >
      {{ value }}
    </a>

    <Tag
      v-else-if="['type', 'level'].includes(key)"
      :value="value"
      severity="info"
      rounded
      class="text-xs tracking-wide"
    />
    <ul
      v-else-if="key === 'references'"
      class="mb-2 ml-4"
    >
      <li
        v-for="(ref, refIndex) in value"
        :key="`reference-${refIndex}`"
      >
        <a :href="ref.url">
          {{ ref.title }}
        </a>
      </li>
    </ul>

    <ul
      v-else-if="key === 'notes'"
      class="ml-4"
    >
      <li
        v-for="(note, noteIndex) in value"
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
      v-else-if="key === 'special_cases'"
      class="ml-4"
    >
      <li
        v-for="(caseItem, caseIndex) in value"
        :key="`case-${caseIndex}`"
        class="mb-4 border-b-2 py-2"
      >
        <div
          v-for="(prop, key) in caseItem"
          :key="`case-prop-${key}`"
        >
          <span class="mr-4 inline-block font-bold first-letter:uppercase"
            >{{ key }}:</span
          >
          <span>
            {{ prop }}
          </span>
        </div>
      </li>
    </ul>

    <ul
      v-else-if="key === 'axeTests'"
      class="ml-4"
    >
      <li
        v-for="(test, testIndex) in value"
        :key="`axe-${testIndex}`"
        class="mb-4 border-b-2 py-2"
      >
        <AxeResultView :test="test" />
      </li>
    </ul>

    <span v-else>{{ value || 'n/a' }}</span>
  </div>
</template>
