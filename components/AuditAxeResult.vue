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
    class="flex items-center justify-between gap-10"
  >
    <h2>
      Result: #{{ result.id }} (<NuxtLink
        :to="result.results?.url"
        target="_blank"
        class="mr-auto"
      >
        {{ result.results?.url }} </NuxtLink
      >)
    </h2>
    <Button
      :disabled="isSaving"
      class="p-button w-full shrink justify-center sm:w-auto"
      @click="saveFormData"
    >
      Save
    </Button>
  </div>
  <Card>
    <template #content>
      <ClientOnly>
        <TabView>
          <TabPanel
            v-for="(type, typeIndex) in audit"
            :key="`type-${typeIndex}`"
            :header="type.name"
          >
            <DynamicScroller
              :items="type.tests"
              :min-item-size="317"
              page-mode
            >
              <template #default="{ item: test, index, active }">
                <DynamicScrollerItem
                  :item="test"
                  :active="active"
                  :size-dependencies="[test.results]"
                  :data-index="index"
                >
                  <WcagCoveredByTrustedTest
                    v-if="typeIndex === 'wcagCoveredByTrustedTest'"
                    :test="test"
                  >
                    <ResultForm
                      :test-id="test.info['Test ID']"
                      :test-name="test.info['Test Name']"
                      :form-data="formData"
                      @update-field="(value) => updateField(value)"
                    />
                  </WcagCoveredByTrustedTest>
                  <LazyWcagNotCoveredByTrustedTest
                    v-if="typeIndex === 'wcagNotCoveredByTrustedTest'"
                    :test="test"
                  />
                  <LazyAxeResultView
                    v-if="typeIndex === 'axeAdditional'"
                    :test="test"
                  />
                </DynamicScrollerItem>
              </template>
            </DynamicScroller>
          </TabPanel>
        </TabView>

        <template #fallback>
          <Spinner class="mx-auto w-20" />
        </template>
      </ClientOnly>
    </template>
  </Card>
</template>
