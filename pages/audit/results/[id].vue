<script lang="ts" setup>
import { categories } from '~/data/categories'
import { wcagSuccessCriteria } from '~/data/wcagSuccessCriteria'
import type { Database } from 'types/supabase'
import type { Audit } from 'types/database'
import {
  addTTCriteriaToCategory,
  filterTrustedTestsByCategory,
  flattenAxeResults,
} from '~/composables/useResults'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const auditId = route.params.id

const { data } = await supabase
  .from('axe')
  .select('*, audits (config)')
  .eq('audit_id', auditId)

const axeResultByPages = ref<Audit>(data)

const flattedResults = computed(() => {
  const resultsSet = new Set()

  axeResultByPages.value.forEach((page) => {
    const results = flattenAxeResults(page.results)
    results.forEach((result) => resultsSet.add(result))
  })

  return resultsSet
})

const audit = categories.map((category) => {
  const ttItems = filterTrustedTestsByCategory(category)

  if (ttItems.length) {
    ttItems.forEach((test) => addTTCriteriaToCategory(category, test))

    // assign axe to TT test
    const trustedTestsWithAxeResults = ttItems.map((ttElem) => {
      const filteredResultsByWcagSC = [...flattedResults.value].filter(
        (result) =>
          result.tags.includes(`wcag${ttElem.CrtID.replaceAll('.', '')}`)
      )

      ttElem.filteredResultsByWcagSC = filteredResultsByWcagSC.length
        ? filteredResultsByWcagSC
        : []

      const filteredResultsByTT = [...flattedResults.value].filter((result) =>
        result.tags.includes(`TT${ttElem.TestID.toLowerCase()}`)
      )

      ttElem.filteredResultsByTT = filteredResultsByTT.length
        ? filteredResultsByTT
        : []

      return ttElem
    })

    category.trustedTests = trustedTestsWithAxeResults
  }
  return category
})

let coveredWCAGsWithTrustedTest = new Set()
audit.forEach((category) => {
  if (
    category?.wcag508SC &&
    ![...category.wcag508SC].includes('Requirements')
  ) {
    for (const wcagNumber of category.wcag508SC) {
      coveredWCAGsWithTrustedTest.add(wcagNumber)
    }
  }
})
coveredWCAGsWithTrustedTest = [...coveredWCAGsWithTrustedTest].sort()

// wcag not in TT tests
const wcagNotCoverWithTT = wcagSuccessCriteria.filter(
  (wcag) =>
    !coveredWCAGsWithTrustedTest.includes(wcag.ref_id) && wcag.level !== 'AAA'
)

// wcag not cover with axe
const wcagNotTTCoverWithAxe = wcagNotCoverWithTT.map((el) => {
  const axeItem = [...flattedResults.value].filter((result) =>
    result.tags.includes(`wcag${el.ref_id.replaceAll('.', '')}`)
  )

  if (axeItem.length) {
    el.axeTtests = axeItem
  }
  return el
})

const wcagNotCover = {
  name: 'WCAG SCs not cover',
  tests: wcagNotTTCoverWithAxe,
}
audit.push(wcagNotCover)

console.log(audit)
const regexpAxe = new RegExp('^wcag')
const axeNotWcag = [...flattedResults.value].filter(
  (result) => !result.tags.some((item) => regexpAxe.test(item))
)
const axeBestPractices = {
  name: 'Axe best practices',
  tests: axeNotWcag,
}
console.log('axeNotWcag.length', axeNotWcag.length)
audit.push(axeBestPractices)
console.log(audit)
</script>

<template>
  <div class="grid">
    <h1>Result of Audit #{{ auditId }}</h1>
  </div>

  <Card>
    <template #content>
      <Accordion v-if="axeResultByPages.length">
        <template
          v-for="(page, index) in axeResultByPages"
          :key="`page-${index}`"
        >
          <AccordionTab :header="page.results.url">
            <pre>{{ page.results.violations }}</pre>
          </AccordionTab>
        </template>
      </Accordion>
      <p v-else>No results for audit {{ auditId }}</p>
    </template>
  </Card>
</template>
