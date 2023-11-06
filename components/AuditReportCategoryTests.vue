<script lang="ts" setup>
import type { Test } from 'types/audit-report'

defineProps<{
  name: string
  status: string
  tests: Test[]
}>()
</script>

<template>
  <div class="mb-6 flex items-center">
    <h2 class="order-1 ml-3 text-2xl font-medium">
      {{ name }}
    </h2>
    <StatusFaceIcon
      :status-list="[status]"
      class="h-12 w-12"
    />
  </div>
  <Accordion :multiple="true">
    <AccordionTab
      v-for="(test, testIndex) in tests"
      :key="testIndex"
    >
      <template #header>
        <span class="mr-2">
          {{ test.name }}
        </span>
        <StatusFaceIcon
          :status-list="test.pageStatuses.map(({ status }) => status)"
          class="h-8 w-8"
        />
      </template>
      <div class="mb-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        <div class="flex h-full flex-col space-y-4">
          <div class="flex-1 rounded-md border p-6">
            <TrustedTestInfo
              :info="test.info"
              :displayed-info-keys="['WCAG SC', 'Level', 'Test Conditions']"
            />
          </div>
          <AuditAutomaticTestResultSummary
            v-if="test.testedElementsCount > 0"
            :total-count="test.testedElementsCount"
            :issues-count="
              test.groupedResults.find((group) => group.type === 'issues')
                ?.testedElementsCount || 0
            "
            :passes-count="
              test.groupedResults.find((group) => group.type === 'passes')
                ?.testedElementsCount || 0
            "
          />
        </div>
        <AuditReportPageStatuses :page-statuses="test.pageStatuses" />
      </div>
      <div class="space-y-4">
        <template
          v-for="(group, groupIndex) in test.groupedResults"
          :key="groupIndex"
        >
          <div
            v-if="
              group.manualTestResults.length ||
              group.automaticTestResults.length
            "
            class="rounded-md border p-6"
          >
            <h3 class="mb-4 text-lg font-medium first-letter:uppercase">
              {{ group.type }}
              <span
                :class="{
                  'text-red-800': group.type === 'issues',
                  'text-green-800': group.type === 'passes',
                }"
              >
                ({{
                  group.testedElementsCount + group.manualTestResults.length
                }})
              </span>
            </h3>
            <ul class="space-y-4">
              <AuditReportManualTestResults
                v-if="group.manualTestResults.length"
                :type="group.type"
                :manual-test-results="group.manualTestResults"
              />
              <template
                v-for="(
                  automaticTestResult, automaticTestResultIndex
                ) in group.automaticTestResults"
                :key="automaticTestResultIndex"
              >
                <AuditAutomaticTestResultIssue
                  v-if="group.type === 'issues'"
                  :id="automaticTestResult.id"
                  :description="automaticTestResult.description"
                  :impact="automaticTestResult.impact"
                  :grouped-nodes="automaticTestResult.groupedNodes"
                />
                <AuditAutomaticTestResultPass
                  v-else
                  :id="automaticTestResult.id"
                  :description="automaticTestResult.description"
                  :impact="automaticTestResult.impact"
                  :grouped-nodes="automaticTestResult.groupedNodes"
                />
              </template>
            </ul>
          </div>
        </template>
      </div>
    </AccordionTab>
  </Accordion>
</template>
