import type { FormData } from 'types/supabase'
import type { Audit, AuditInfo } from 'types/audit'

import { getStatus } from '~/utils/get-status'
import { manualTestResultsStatusOptions } from '~/data/manualTestResultsStatusOptions'

function addToUniqueList(
  list: string[],
  value: AuditInfo['Level' | 'WCAG SC' | 'Test Category']
): void {
  const items =
    typeof value === 'string' ? [value] : Array.isArray(value) ? [...value] : []
  items.forEach((item) => {
    if (!list.includes(item)) {
      list.push(item)
    }
  })
}

export default function useAuditFilters(
  audit: Ref<Audit>,
  formData: Ref<FormData>
) {
  const selectedItems = ref({
    selectedWcagSc: [],
    selectedLevel: [],
    selectedStatus: [],
    selectedCategory: [],
  })
  const optionLists = ref<Record<string, string[]>>({
    wcagScList: [],
    levelList: [],
    statusList: manualTestResultsStatusOptions,
    categoryList: [],
  })

  const searchValue = ref('')
  const searchValueDebounced = refDebounced(searchValue, 300)

  function extractSelectedCodes(selectedItems: string[]): Set<string> {
    return new Set((selectedItems || []).map((value) => value))
  }

  // Get available filters
  audit.value.forEach((test) => {
    addToUniqueList(optionLists.value.wcagScList, test.info['WCAG SC'])
    addToUniqueList(optionLists.value.levelList, test.info.Level)
    addToUniqueList(optionLists.value.categoryList, test.info['Test Category'])
  })
  optionLists.value.wcagScList.sort()
  optionLists.value.categoryList.sort()

  for (const [, value] of Object.entries(formData.value)) {
    if (typeof value === 'object' && value !== null && 'status' in value) {
      addToUniqueList(optionLists.value.statusList, value.status as string)
    }
  }

  const filteredAudit: Ref<Audit> = computed(() => {
    if (
      selectedItems.value.selectedWcagSc.length === 0 &&
      selectedItems.value.selectedLevel.length === 0 &&
      selectedItems.value.selectedStatus.length === 0 &&
      selectedItems.value.selectedCategory.length === 0 &&
      !searchValueDebounced.value
    ) {
      return audit.value
    } else {
      // Filters part
      const selectedWcagCodes = extractSelectedCodes(
        selectedItems.value.selectedWcagSc
      )
      const selectedLevels = extractSelectedCodes(
        selectedItems.value.selectedLevel
      )
      const selectedStatuses = extractSelectedCodes(
        selectedItems.value.selectedStatus
      )
      const selectedCategories = extractSelectedCodes(
        selectedItems.value.selectedCategory
      )

      const filteredTests = audit.value.filter((element) => {
        const filteredWcag =
          selectedWcagCodes.size === 0 ||
          element.info['WCAG SC']?.some((value) => selectedWcagCodes.has(value))
        const filteredLevel =
          selectedLevels.size === 0 ||
          (element.info.Level && selectedLevels?.has(element.info.Level))
        const filteredStatus =
          selectedStatuses.size === 0 ||
          selectedStatuses.has(
            getStatus({
              automaticTestResultsStatus: element.automaticTestResultsStatus,
              manualTestResultsStatus:
                formData.value[element.id].manualTestResultsStatus,
            })
          )
        const filteredCategories =
          selectedCategories.size === 0 ||
          selectedCategories.has(element.info['Test Category'])

        return (
          filteredWcag && filteredLevel && filteredStatus && filteredCategories
        )
      })

      // Search part
      let foundObjects = filteredTests

      if (
        searchValueDebounced.value &&
        searchValueDebounced.value.length >= 3
      ) {
        foundObjects = []
        filteredTests.forEach((item) => {
          const found = useDeepSearch(item, searchValueDebounced.value)
          if (found.length > 0) {
            foundObjects.push(item)
          }
        })
      }

      return foundObjects
    }
  })

  return {
    filteredAudit,
    selectedItems,
    optionLists,
    searchValue,
  }
}
