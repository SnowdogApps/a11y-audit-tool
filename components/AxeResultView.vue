<script lang="ts" setup>
import VueJsonPretty from 'vue-json-pretty'

defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <div
    v-for="(value, key) in test"
    :key="key"
  >
    <span class="mr-2 font-bold capitalize">{{ key }}:</span>
    <a
      v-if="['helpUrl', 'url'].includes(key)"
      :href="value"
    >
      {{ value }}
    </a>

    <Tag
      v-else-if="key === 'type'"
      :value="value"
      severity="info"
      rounded
      class="tracking-wider"
    />
    <span v-else-if="key === 'tags'">
      <Tag
        v-for="tag in value"
        :key="`tag-${tag}`"
        class="mr-2 text-xs tracking-wider"
        :value="tag"
      />
    </span>

    <div
      v-else-if="key === 'nodes'"
      class="ml-4"
    >
      <VueJsonPretty
        :data="value"
        :show-length="true"
        :deep="0"
      />
    </div>

    <span v-else>{{ value || 'n/a' }}</span>
  </div>
</template>
