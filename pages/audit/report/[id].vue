<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'
import type { Database } from 'types/supabase'
import { getAuditReport } from '~/utils/get-audit-report'

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const user = useSupabaseUser()
const auditId = route.params.id
const isSharableReport = route.query.share === 'true' || !user.value
const reportType =
  typeof route.query.type === 'string' ? route.query.type : 'review'

definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(async (middleware) => {
      const user = useSupabaseUser()
      if (!user.value) {
        // As a guest user you can only see completed reports
        const supabase = useSupabaseClient<Database>()
        const { data: auditInfo } = await supabase
          .from('audits')
          .select('status')
          .eq('id', middleware.params.id)
          .single()
        if (auditInfo?.status === 'draft') {
          return navigateTo('/login')
        }
      }

      if (!user.value || middleware.query.share === 'true') {
        setPageLayout('blank')
      }
    }),
  ],
})

const { data: axeResults } = await supabase
  .from('axe')
  .select('*')
  .eq('audit_id', auditId)

const { data: auditInfo } = await supabase
  .from('audits')
  .select('*, projects(name), profiles(username, full_name)')
  .eq('id', auditId)
  .single()

if (!axeResults || !auditInfo) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Audit not found',
    fatal: true,
  })
}

const auditReport = getAuditReport(axeResults)
const isAuditCompleted = ref(auditInfo.status === 'completed')

const toast = useToast()
const isCompletingReport = ref(false)
const completeReport = async () => {
  isCompletingReport.value = true
  const supabase = useSupabaseClient<Database>()

  try {
    const { data, error } = await supabase
      .from('audits')
      .update({ status: 'completed', report_type: reportType })
      .eq('id', auditId)
      .select()
    if (error) {
      throw new Error(error?.message)
    }
    if (data?.length === 1) {
      isAuditCompleted.value = true
      toast.add({
        severity: 'success',
        summary: 'Successfully completed report.',
        life: 3000,
      })
    }
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: (error as Error).message || 'Failed to save data.',
      life: 3000,
    })
  } finally {
    isCompletingReport.value = false
  }
}
</script>

<template>
  <div>
    <div
      v-if="auditInfo && auditReport"
      class="space-y-6"
      :class="{ 'mb-24': !isAuditCompleted }"
    >
      <AuditReportSharableLink v-if="isAuditCompleted && !isSharableReport" />
      <Card>
        <template #content>
          <div class="mb-16 space-y-4 text-center">
            <Tag
              v-if="!isAuditCompleted"
              :value="`${reportType} report preview`"
              class="!px-16 !text-xl !font-normal"
              severity="info"
              rounded
            />
            <h1 class="font-medium">
              Audit report "{{ auditInfo.config.title }}"
            </h1>
            <p>
              Created by {{ auditInfo.profiles?.full_name }} in "{{
                auditInfo.projects?.name
              }}" project on
              <time>
                {{
                  new Date(auditInfo.created_at).toLocaleDateString('pl-PL')
                }} </time
              >.
            </p>
          </div>
          <div
            class="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-[1fr_240px]"
          >
            <div class="flex flex-col justify-center">
              <h2 class="text-lg font-medium">Pages:</h2>
              <ul class="mb-4 list-disc space-y-2 pl-8">
                <li
                  v-for="(page, index) in auditInfo.config.pages"
                  :key="index"
                >
                  <NuxtLink
                    :to="page.url"
                    target="_blank"
                    class="break-all"
                  >
                    {{ page.url }}
                  </NuxtLink>
                  <template v-if="page.selector?.length">
                    - selector:
                    <code class="break-words rounded-md bg-gray-100 px-2 py-1">
                      page.selector
                    </code>
                  </template>
                </li>
              </ul>
              <h2 class="text-lg font-medium">Screen sizes:</h2>
              <ul class="list-disc pl-8">
                <li
                  v-for="(viewport, index) in auditInfo.config.viewports"
                  :key="index"
                >
                  {{ viewport }}
                </li>
              </ul>
            </div>
            <AuditReportIssuesCount
              :count="auditReport.testedElementsCount.issues"
            />
          </div>
          <div
            v-if="!isAuditCompleted"
            class="fixed bottom-0 right-0 z-20 w-full border-t bg-white shadow-[0_-1px_6px_0_rgba(0,0,0,0.1)] md:border-none md:bg-transparent md:shadow-none"
          >
            <div
              class="flex w-full justify-end space-x-4 p-4 xl:container xl:mx-auto"
            >
              <NuxtLink
                :to="`/audit/${auditId}`"
                class="p-button p-button-lg p-button-outlined w-full shrink justify-center md:w-[240px]"
              >
                Edit audit
              </NuxtLink>
              <Button
                :disabled="isCompletingReport"
                class="p-button-lg w-full shrink justify-center md:w-[240px]"
                @click="completeReport"
              >
                Complete report
              </Button>
            </div>
          </div>
        </template>
      </Card>
      <Card
        v-for="(categoryData, categoryName) in auditReport.categories"
        :key="categoryName"
      >
        <template #content>
          <AuditReportCategoryTests
            :name="categoryName"
            :tests="categoryData.tests"
            :status="categoryData.status"
          />
        </template>
      </Card>
    </div>
  </div>
</template>
