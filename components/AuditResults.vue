<script lang="ts" setup>
// @ts-ignore
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import type { Axe } from 'types/database'

const props = defineProps<{
  result: Axe
}>()

const {
  audit,
  isSaving,
  formData,
  isFormDataEdited,
  updateField,
  saveFormData,
} = await useAudit(props.result)

const { filteredAudit, optionLists, searchValue, selectedItems } =
  useAuditFilters(audit, formData)

const resultsHeader = ref<HTMLElement | null>(null)
const isResultsHeaderVisible = ref(false)
useIntersectionObserver(resultsHeader, ([{ isIntersecting }]) => {
  isResultsHeaderVisible.value = isIntersecting
})

const isSelectReportTypeModalVisible = ref(false)
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <InlineMessage
      v-show="isFormDataEdited"
      severity="warn"
      class="flex w-full items-center !justify-start"
    >
      Save your changes before selecting different url, selector or device.
    </InlineMessage>
  </Transition>
  <div
    ref="resultsHeader"
    class="flex flex-col items-center justify-between gap-x-10 gap-y-4 md:flex-row"
  >
    <h2 class="font-medium">
      #{{ result.id }}: Results for
      <NuxtLink
        v-if="result.results.url"
        :to="result.results.url"
        target="_blank"
        class="mr-auto break-all"
      >
        {{ result.results.url }}
      </NuxtLink>
      <span
        v-else
        class="mr-auto break-all"
      >
        {{ result.size }}
      </span>
    </h2>
    <div
      class="w-full"
      :class="{
        'md:w-[320px]': isResultsHeaderVisible,
        'fixed bottom-0 right-0 z-20 border-t bg-white shadow-[0_-1px_6px_0_rgba(0,0,0,0.1)] md:border-none md:bg-transparent md:shadow-none':
          !isResultsHeaderVisible,
      }"
    >
      <div
        class="w-full"
        :class="{
          'flex justify-end p-4 xl:container xl:mx-auto':
            !isResultsHeaderVisible,
        }"
      >
        <Button
          v-if="isFormDataEdited"
          :disabled="isSaving"
          class="p-button-lg w-full shrink justify-center"
          :class="{
            'md:w-[320px]': !isResultsHeaderVisible,
          }"
          @click="saveFormData"
        >
          Save
        </Button>
        <Button
          v-else
          class="p-button-lg w-full shrink justify-center"
          :class="{
            'md:w-[320px]': !isResultsHeaderVisible,
          }"
          severity="success"
          @click="isSelectReportTypeModalVisible = true"
        >
          Generate report
        </Button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <label
        for="wcagScList"
        class="mb-2 block font-medium"
      >
        WCAG SC
      </label>
      <!-- option-label prop is required for filtering -->
      <MultiSelect
        id="wcagScList"
        v-model="selectedItems.selectedWcagSc"
        :options="optionLists.wcagScList"
        filter
        :option-label="(data) => data"
        placeholder="WCAG SC"
        class="w-full"
        :max-selected-labels="3"
      />
    </div>
    <div>
      <label
        for="categoryList"
        class="mb-2 block font-medium"
      >
        Test Category
      </label>
      <MultiSelect
        id="categoryList"
        v-model="selectedItems.selectedCategory"
        filter
        :options="optionLists.categoryList"
        :option-label="(data) => data"
        placeholder="Category"
        class="w-full"
        :max-selected-labels="2"
      />
    </div>
    <div>
      <label
        for="levelList"
        class="mb-2 block font-medium"
      >
        Level
      </label>
      <MultiSelect
        id="levelList"
        v-model="selectedItems.selectedLevel"
        :options="optionLists.levelList"
        placeholder="Level"
        class="w-full"
        :max-selected-labels="2"
      />
    </div>
    <div>
      <label
        for="statusList"
        class="mb-2 block font-medium"
      >
        Status
      </label>
      <MultiSelect
        id="statusList"
        v-model="selectedItems.selectedStatus"
        :options="(optionLists.statusList as unknown as any[])"
        placeholder="Status"
        class="w-full"
        :max-selected-labels="2"
      />
    </div>
    <div class="md:col-span-2">
      <label
        for="search"
        class="mb-2 block font-medium"
      >
        Search
      </label>
      <div class="p-input-icon-left w-full">
        <i class="pi pi-search" />
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Search (3 characters minimum)"
          class="h-10 w-full"
        />
      </div>
    </div>
  </div>

  <ClientOnly>
    <DynamicScroller
      :items="filteredAudit"
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
  <Dialog
    v-model:visible="isSelectReportTypeModalVisible"
    modal
    dismissable-mask
  >
    <LazyAuditSelectReportTypeModalContent
      v-if="isSelectReportTypeModalVisible"
      :no-axe="!Object.keys(result.results).length"
    />
  </Dialog>
</template>
