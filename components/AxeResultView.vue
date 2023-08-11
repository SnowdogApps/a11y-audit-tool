<script lang="ts" setup>
defineProps<{
  test: Record<string, string | unknown>
}>()
</script>

<template>
  <div
    v-for="(value, key) in test"
    :key="key"
  >
    <template v-if="!['type'].includes(key)">
      <span class="mr-2 font-bold capitalize">{{ key }}:</span>
      <ul
        v-if="key === 'helper'"
        class="list-disc pl-8"
      >
        <li
          v-for="(helperValue, helperKey) in value"
          :key="helperKey"
        >
          <NuxtLink
            v-if="helperKey === 'helpUrl'"
            :to="helperValue"
            target="_blank"
          >
            More info
          </NuxtLink>
          <template v-else>
            {{ helperValue }}
          </template>
        </li>
      </ul>
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
    </template>
  </div>
</template>
