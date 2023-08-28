import type { Audit } from 'types/audit'

export default function useAuditFilters(
  audit: globalThis.Ref<Audit>,
  formData
) {
  interface ListItem {
    name: string
    code: string
  }

  interface SelectedItem {
    code: string
  }

  const selectedItems = ref({
    selectedWcagSc: [],
    selectedLevel: [],
    selectedStatus: [],
  })
  const optionLists = ref({
    wcagScList: [],
    levelList: [],
    statusList: [],
  })
  const searchValue = useDebouncedRef('', 300)

  function addToUniqueList(list: ListItem[], item: string): void {
    if (!list.some((listItem) => listItem.name === item)) {
      list.push({
        name: item,
        code: item,
      })
    }
  }

  // Populate test.info with FormData
  function populateInfo(test: any, infoKey: string, formDataKey: string): void {
    test.info[infoKey] = formData.value[test.info['Test ID']][formDataKey]
  }

  function extractSelectedCodes(
    selectedItems: SelectedItem[],
    key: string
  ): Set<string> {
    return new Set((selectedItems || []).map((item) => item[key]))
  }

  // Get available filters
  audit.value.wcagCoveredByTrustedTest.tests.forEach((test: any) => {
    addToUniqueList(optionLists.value.wcagScList, test.info['WCAG SC'])
    addToUniqueList(optionLists.value.levelList, test.info.Level)
  })

  for (const [, value] of Object.entries(formData.value)) {
    addToUniqueList(optionLists.value.statusList, value.status)
  }

  // All data in one object makes filtering easier
  audit.value.wcagCoveredByTrustedTest.tests.forEach((test) => {
    populateInfo(test, 'status', 'status')
    populateInfo(test, 'manualTestDesc', 'manualTestDesc')
    populateInfo(test, 'recommendationDesc', 'recommendationDesc')
  })

  const filteredAudit: globalThis.Ref<Audit> = computed(() => {
    if (
      selectedItems.value.selectedWcagSc.length === 0 &&
      selectedItems.value.selectedLevel.length === 0 &&
      selectedItems.value.selectedStatus.length === 0 &&
      !searchValue.value
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

          return filteredWcag && filteredLevel && filteredStatus
        }
      )

      // Search part
      let foundObjects = filteredTests

      if (searchValue.value) {
        foundObjects = []
        filteredTests.forEach((item) => {
          const found = useDeepSearch(item, searchValue.value)
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
