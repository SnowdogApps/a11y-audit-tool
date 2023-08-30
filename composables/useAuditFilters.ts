import type { AuditCategories } from 'types/audit'
interface ListItem {
  name: string
  code: string
}

function addToUniqueList(list: ListItem[], item: string): void {
  if (!list.some((listItem) => listItem.name === item)) {
    list.push({
      name: item,
      code: item,
    })
  }
}

export default function useAuditFilters(audit: Ref<AuditCategories>, formData) {
  interface SelectedItem {
    code: string
  }

  const selectedItems = ref({
    selectedWcagSc: [],
    selectedLevel: [],
    selectedStatus: [],
    selectedCategory: [],
  })
  const optionLists = ref({
    wcagScList: [],
    levelList: [],
    statusList: [],
    categoryList: [],
  })

  const searchValue = ref('')
  const searchValueDebounced = refDebounced(searchValue, 300)

  // Populate test.info with FormData
  function populateInfo(test: any, infoKey: string, formDataKey: string): void {
    test.info[infoKey] = formData.value[test.info['Test ID']][formDataKey]
  }

  function extractSelectedCodes(
    selectedItems: SelectedItem[],
    key: keyof SelectedItem
  ): Set<string> {
    return new Set((selectedItems || []).map((item) => item[key]))
  }

  // Get available filters
  audit.value.wcagCoveredByTrustedTest.tests.forEach((test: any) => {
    addToUniqueList(optionLists.value.wcagScList, test.info['WCAG SC'])
    addToUniqueList(optionLists.value.levelList, test.info.Level)
    addToUniqueList(optionLists.value.categoryList, test.info['Test Category'])
  })

  for (const [, value] of Object.entries(formData.value)) {
    if (typeof value === 'object' && value !== null && 'status' in value) {
      addToUniqueList(optionLists.value.statusList, value.status as string)
    }
  }

  // All data in one object makes filtering easier
  audit.value.wcagCoveredByTrustedTest.tests.forEach((test) => {
    populateInfo(test, 'status', 'status')
    populateInfo(test, 'manualTestDesc', 'manualTestDesc')
    populateInfo(test, 'recommendationDesc', 'recommendationDesc')
  })

  const filteredAudit: Ref<AuditCategories> = computed(() => {
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
        selectedItems.value.selectedWcagSc,
        'code'
      )
      const selectedLevels = extractSelectedCodes(
        selectedItems.value.selectedLevel,
        'code'
      )
      const selectedStatuses = extractSelectedCodes(
        selectedItems.value.selectedStatus,
        'code'
      )
      const selectedCategories = extractSelectedCodes(
        selectedItems.value.selectedCategory,
        'code'
      )

      const filteredTests = audit.value.wcagCoveredByTrustedTest.tests.filter(
        (element) => {
          const filteredWcag =
            selectedWcagCodes.size === 0 ||
            selectedWcagCodes.has(element.info['WCAG SC'])
          const filteredLevel =
            selectedLevels.size === 0 || selectedLevels.has(element.info.Level)
          const filteredStatus =
            selectedStatuses.size === 0 ||
            selectedStatuses.has(element.info.status)
          const filteredCategories =
            selectedCategories.size === 0 ||
            selectedCategories.has(element.info['Test Category'])

          return (
            filteredWcag &&
            filteredLevel &&
            filteredStatus &&
            filteredCategories
          )
        }
      )

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

      // Combined results
      const combinedFilterResults = {
        ...audit.value,
        wcagCoveredByTrustedTest: {
          ...audit.value.wcagCoveredByTrustedTest,
          tests: foundObjects,
        },
      }

      return combinedFilterResults
    }
  })

  return {
    filteredAudit,
    selectedItems,
    optionLists,
    searchValue,
  }
}
