<script lang="ts" setup>
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient<Database>()
const route = useRoute()
const router = useRouter()
const auditId = route.params.id
const resultId = ref(Number(route.query.resultId))

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

const initialResultDevice = axeResults?.find(
  (result) => result.id === resultId.value
)?.size
const device = ref(initialResultDevice || auditInfo.config?.viewports?.[0])

const urlAndSelectorOptions = axeResults?.map((result) => ({
  id: result.id,
  name: `${result.results?.url} - ${result.selector ?? ''}`,
  device: result.size,
}))
const urlAndSelectorOptionsForSelectedDevice = computed(() =>
  urlAndSelectorOptions.filter((result) => result.device === device.value)
)

const changeDevice = (value: string) => {
  const previousResultName = urlAndSelectorOptionsForSelectedDevice.value.find(
    (value) => value.id === resultId.value
  )?.name
  device.value = value
  resultId.value =
    urlAndSelectorOptionsForSelectedDevice.value.find(
      (option) => option.name === previousResultName
    )?.id || resultId.value
}

watch(resultId, () => {
  router.replace({
    query: {
      resultId: resultId.value,
    },
  })
})
</script>

<template>
  <div class="space-y-6">
    <template v-if="auditInfo && auditInfo.config">
      <h1>Audit: {{ auditInfo.config.title }}</h1>
      <Accordion>
        <AccordionTab header="Audit Information">
          <ul class="space-y-1">
            <li><span class="font-bold">Id: </span>#{{ auditId }}</li>
            <li>
              <span class="font-bold">Project: </span>
              {{ auditInfo.projects?.name }}
            </li>
            <li>
              <span class="font-bold">Created at: </span>
              <time>
                {{ new Date(auditInfo.created_at).toLocaleDateString('pl-PL') }}
              </time>
            </li>
            <li>
              <span class="font-bold">Auditor: </span>
              {{ auditInfo.profiles?.full_name }} ({{
                auditInfo.profiles?.username
              }})
            </li>
            <li>
              <span class="font-bold">Status: </span>{{ auditInfo.status }}
            </li>
            <li v-if="auditInfo.config?.basicAuth?.username?.length">
              <span class="font-bold">Basic Authentication:</span>
              <ul class="pl-4">
                <li
                  v-for="(tTValue, tTKey) in auditInfo.config.basicAuth"
                  :key="tTKey"
                >
                  <span class="font-bold first-letter:uppercase">
                    {{ tTKey }}:
                  </span>
                  &nbsp;
                  {{ tTValue }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Pages:</span>
              <ul class="pl-4">
                <li
                  v-for="(page, index) in auditInfo.config.pages"
                  :key="index"
                  class="flex min-h-[28px] flex-wrap items-center gap-2"
                >
                  <NuxtLink
                    :to="page.url"
                    target="_blank"
                  >
                    {{ page.url }}
                  </NuxtLink>
                  <Tag
                    v-if="page.selector?.length"
                    :value="page.selector"
                    severity="info"
                    rounded
                    class="max-w-full [&>.p-tag-value]:truncate"
                  />
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Viewports:</span>
              <ul class="pl-4">
                <li
                  v-for="(viewport, index) in auditInfo.config.viewports"
                  :key="index"
                >
                  {{ viewport }}
                </li>
              </ul>
            </li>
          </ul>
        </AccordionTab>
      </Accordion>
      <div>
        <div class="grid gap-x-6 gap-y-4 md:grid-cols-[2fr_1fr]">
          <div>
            <label
              for="url-selector"
              class="mb-4 block font-bold"
            >
              Url and selector
            </label>
            <Dropdown
              v-model="resultId"
              class="w-full"
              :options="urlAndSelectorOptionsForSelectedDevice"
              option-label="name"
              option-value="id"
              input-id="device"
            />
          </div>
          <div>
            <label
              for="device"
              class="mb-4 block font-bold"
            >
              Device
            </label>
            <Dropdown
              :model-value="device"
              class="w-full"
              :options="auditInfo.config.viewports"
              input-id="device"
              @update:model-value="changeDevice"
            />
          </div>
        </div>
        <InlineMessage
          v-if="resultId"
          severity="warn"
          class="!mt-4 flex w-full items-center !justify-start"
        >
          Save your changes before selecting different url, selector or device.
        </InlineMessage>
      </div>
      <AuditAxeResult
        :key="resultId"
        :result="axeResults.find((result) => result.id === resultId)"
      />
    </template>
  </div>
</template>
