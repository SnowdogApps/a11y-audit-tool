import { useToast } from 'primevue/usetoast'
import { trustedTests } from '~/data/trustedTests'
import type { Database, FormDataField, FormData } from 'types/supabase'
import type { AutomaticTestGroupedResult, Audit } from 'types/audit'
import type { SupabaseError } from '~/plugins/error'

export function useAudit(
  axeResult?: Database['public']['Tables']['axe']['Row']
) {
  const toast = useToast()
  const isSaving = ref(false)

  const formData = ref<FormData>(
    trustedTests.reduce((acc, test) => {
      const testId = test['Test ID']
      return {
        ...acc,
        [testId]: {
          status: axeResult?.form_data?.[testId]?.status || 'Not tested',
          notes: axeResult?.form_data?.[testId]?.notes || '',
          automaticTestResultsStatus:
            axeResult?.form_data?.[testId]?.automaticTestResultsStatus,
          manualTestResultsStatus:
            axeResult?.form_data?.[testId]?.manualTestResultsStatus ||
            'Not tested',
          manualTestIssues:
            axeResult?.form_data?.[testId]?.manualTestIssues || '',
          manualTestRecommendedFixes:
            axeResult?.form_data?.[testId]?.manualTestRecommendedFixes || '',
        },
      }
    }, {})
  )

  const updateField = ({
    id,
    field,
    value,
  }: {
    id: string
    field: FormDataField
    value: string
  }) => {
    formData.value[id][field] = value
  }

  const saveFormData = async () => {
    isSaving.value = true
    const supabase = useSupabaseClient<Database>()

    if (axeResult) {
      try {
        const { data, error } = await supabase
          .from('axe')
          .update({ form_data: formData.value })
          .eq('id', axeResult.id)
          .select()
        if (!error && data?.length === 1) {
          toast.add({
            severity: 'success',
            summary: 'Successfully saved data',
            life: 3000,
          })
        }
      } catch (error) {
        const { $handleError } = useNuxtApp()

        $handleError(error as Error | SupabaseError)
      } finally {
        isSaving.value = false
      }
    }
  }

  const audit = ref<Audit>([])

  if (axeResult) {
    const results = toValue(axeResult.results)
    const automaticTestsGroupedResults = [
      {
        type: 'violations',
        results: results.violations || [],
      },
      {
        type: 'passes',
        results: results?.passes || [],
      },
    ]

    trustedTests.forEach((test) => {
      let defaultAutomaticTestResultsStatus = 'Not applicable'
      const isAutomaticTestResultsStatusDefined =
        !!formData.value[test['Test ID']].automaticTestResultsStatus
      const automaticTestGroupedResults: AutomaticTestGroupedResult[] = []
      automaticTestsGroupedResults.forEach(({ type, results }) => {
        const testResults = results.filter(({ tags }) =>
          tags.includes(`wcag${test['WCAG SC'].replaceAll('.', '')}`)
        )

        automaticTestGroupedResults.push({
          type,
          results: testResults,
        })

        if (!isAutomaticTestResultsStatusDefined && testResults.length) {
          if (type === 'violations') {
            defaultAutomaticTestResultsStatus = 'Failed'
          } else if (defaultAutomaticTestResultsStatus !== 'Failed') {
            defaultAutomaticTestResultsStatus = 'Passed'
          }
        }
      })
      audit.value.push({
        id: test['Test ID'],
        info: test,
        automaticTestGroupedResults,
      })

      if (!isAutomaticTestResultsStatusDefined) {
        formData.value[test['Test ID']].automaticTestResultsStatus =
          defaultAutomaticTestResultsStatus
      }
    })
  }

  return {
    audit,
    formData,
    isSaving,
    updateField,
    saveFormData,
  }
}
