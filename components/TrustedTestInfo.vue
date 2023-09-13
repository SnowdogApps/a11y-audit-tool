<script lang="ts" setup>
import type { AuditInfo } from 'types/audit'

defineProps<{
  info: AuditInfo
}>()

const collapsibleItemsState = ref<Record<string, { isOpen: boolean }>>({
  Note: { isOpen: false },
  Techniques: { isOpen: false },
  'Disability Impact': { isOpen: false },
})
</script>

<template>
  <ul class="space-y-1">
    <li
      v-for="(tTValue, tTKey) in info"
      :key="tTKey"
    >
      <Component
        :is="tTKey in collapsibleItemsState ? 'details' : 'div'"
        v-if="!['status', 'Axe Rules'].includes(tTKey) && tTValue"
      >
        <summary
          v-if="tTKey in collapsibleItemsState"
          class="flex w-full cursor-pointer items-center gap-2 bg-white p-0 text-base font-bold"
          :open="collapsibleItemsState[tTKey].isOpen"
          @click="
            collapsibleItemsState[tTKey].isOpen =
              !collapsibleItemsState[tTKey].isOpen
          "
        >
          {{ tTKey }}
          <i
            class="pi pi-chevron-down pt-0.5 !text-sm transition-transform"
            :class="{ 'rotate-180': collapsibleItemsState[tTKey].isOpen }"
            aria-hidden="true"
          />
        </summary>
        <span
          v-else
          class="inline-block font-bold"
        >
          {{ tTKey }}:&nbsp;
        </span>
        <span
          v-show="
            !(tTKey in collapsibleItemsState) ||
            collapsibleItemsState[tTKey].isOpen
          "
        >
          <template v-if="Array.isArray(tTValue)">
            <ul
              v-if="tTKey === 'WCAG SC'"
              class="inline-flex gap-2"
            >
              <li
                v-for="(tTValueItem, index) in tTValue"
                :key="index"
              >
                <Tag
                  :value="tTValueItem"
                  severity="success"
                  rounded
                  class="tracking-wider [&>.p-tag-value]:leading-4"
                />
              </li>
            </ul>
            <ol
              v-else
              class="mt-1 list-decimal space-y-1 pl-8"
            >
              <li
                v-for="(tTValueItem, index) in tTValue"
                :key="index"
              >
                <NuxtLink
                  v-if="tTKey === 'URLs'"
                  target="_blank"
                  :to="tTValueItem"
                >
                  {{ tTValueItem }}
                </NuxtLink>
                <template v-else>
                  {{ tTValueItem }}
                </template>
              </li>
            </ol>
          </template>
          <template v-else-if="typeof tTValue === 'string'">
            <Tag
              v-if="['Level'].includes(tTKey)"
              :value="tTValue"
              severity="info"
              rounded
              class="tracking-wider [&>.p-tag-value]:leading-4"
            />
            <span
              v-else
              :class="{ 'mt-1 block': tTKey in collapsibleItemsState }"
            >
              {{ tTValue }}
            </span>
          </template>
        </span>
      </Component>
    </li>
  </ul>
</template>
