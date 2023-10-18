<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'
import type { Database } from 'types/supabase'

const route = useRoute()
const auditId = route.params.id
const supabase = useSupabaseClient<Database>()
const NuxtLink = resolveComponent('NuxtLink')
const toast = useToast()

const areManualTestsValidated = ref(false)
const areManualTestsValid = ref(true)

onMounted(async () => {
  const { data: axeResults, error } = await supabase
    .from('axe')
    .select('form_data')
    .eq('audit_id', auditId)

  if (error || !axeResults) {
    toast.add({
      severity: 'error',
      summary: 'Failed to validate manual tests.',
      life: 3000,
    })
  } else {
    areManualTestsValid.value = !axeResults.some((result) =>
      result.form_data && Object.values(result.form_data).length > 0
        ? Object.values(result.form_data).some(
            (value) => value.manualTestResultsStatus === 'Not tested'
          )
        : true
    )
    areManualTestsValidated.value = true
  }
})
</script>

<template>
  <h2 class="font-medium">Select the type of report</h2>
  <div class="divide-y">
    <div class="py-4">
      <div class="grid grid-cols-[1fr_42px] items-center gap-4 md:gap-14">
        <div>
          <h3 class="font-medium">Review</h3>
          <p>
            Presents automatic and manual test results for all pages and screen
            sizes sorted by categories. To generate this report you don't need
            to have manual tests completed.
          </p>
        </div>
        <NuxtLink
          :to="`/audit/report/${auditId}?type=review`"
          class="p-button p-component p-button-icon-only p-button-rounded p-button-outlined"
        >
          <span class="p-button-icon pi pi-chevron-right" />
        </NuxtLink>
      </div>
    </div>
    <div class="py-4">
      <div class="grid grid-cols-[1fr_42px] items-center gap-4">
        <div>
          <h3 class="font-medium">Functional</h3>
          <p>
            The same report as the review but it requires complete manual tests
            for all pages and screen sizes.
          </p>
          <p
            v-if="areManualTestsValidated && !areManualTestsValid"
            class="text-red-700"
          >
            Manual tests aren't completed yet.
          </p>
        </div>
        <Component
          :is="areManualTestsValid ? NuxtLink : 'div'"
          :to="`/audit/report/${auditId}?type=functional`"
          class="p-button p-component p-button-icon-only p-button-rounded p-button-outlined"
          :class="{
            'p-button-secondary !cursor-not-allowed': !areManualTestsValid,
            'p-button-secondary !cursor-wait': !areManualTestsValidated,
          }"
        >
          <span class="p-button-icon pi pi-chevron-right" />
        </Component>
      </div>
    </div>
    <div class="py-4">
      <div class="grid grid-cols-[1fr_42px] items-center gap-4">
        <div>
          <h3 class="font-medium">WCAG</h3>
          <p>
            Mainly required for public sector. It's build on WCAG Success
            Criterion to be compliant with the requirements of the law on
            accessibility.
          </p>
          <p class="text-yellow-700">Currently not available.</p>
        </div>
        <Component
          :is="false ? NuxtLink : 'div'"
          class="p-button p-component p-button-icon-only p-button-rounded p-button-outlined"
          :class="{ 'p-button-secondary !cursor-not-allowed': true }"
        >
          <span class="p-button-icon pi pi-chevron-right" />
        </Component>
      </div>
    </div>
  </div>
</template>
