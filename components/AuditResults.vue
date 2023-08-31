<script lang="ts" setup>
// @ts-ignore
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import type { Database } from 'types/supabase'

const props = defineProps<{
  result: Database['public']['Tables']['axe']['Row'] | undefined
}>()

const { audit, isSaving, formData, updateField, saveFormData } = await useAudit(
  props.result
)
</script>

<template>
  <div
    v-if="result"
    class="flex flex-col items-center justify-between gap-x-10 gap-y-4 md:flex-row"
  >
    <h2>
      #{{ result.id }}: Results for
      <NuxtLink
        :to="result.results.url"
        target="_blank"
        class="mr-auto break-all"
      >
        {{ result.results.url }}
      </NuxtLink>
    </h2>
    <Button
      :disabled="isSaving"
      class="p-button-lg w-full shrink justify-center md:w-60"
      @click="saveFormData"
    >
      Save
    </Button>
  </div>

  <ClientOnly>
    <DynamicScroller
      :items="audit"
      :min-item-size="508"
      page-mode
    >
      <template #default="{ item: test, index, active }">
        <DynamicScrollerItem
          :item="test"
          :active="active"
          :size-dependencies="[test.results]"
          :data-index="index"
        >
          <AuditTest
            :key="test.id"
            :test="test"
            :form-data-item="formData[test.id]"
            @update-field="(value) => updateField({ ...value, id: test.id })"
          />
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
    <template #fallback>
      <Spinner class="mx-auto w-20" />
    </template>
  </ClientOnly>
</template>
