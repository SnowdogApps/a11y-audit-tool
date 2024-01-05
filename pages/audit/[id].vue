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

const initialResultScreenSize = axeResults?.find(
  (result) => result.id === resultId.value
)?.size
const screenSize = ref(
  initialResultScreenSize || auditInfo.config?.viewports?.[0]
)

const urlAndSelectorOptions = axeResults?.map((result) => ({
  id: result.id,
  name: `${result.results?.url} - ${result.selector ?? ''}`,
  screenSize: result.size,
}))
const urlAndSelectorOptionsForSelectedScreenSize = computed(() =>
  urlAndSelectorOptions.filter(
    (result) => result.screenSize === screenSize.value
  )
)

const changeScreenSize = (value: string) => {
  const previousResultName =
    urlAndSelectorOptionsForSelectedScreenSize.value.find(
      (value) => value.id === resultId.value
    )?.name
  screenSize.value = value
  resultId.value =
    urlAndSelectorOptionsForSelectedScreenSize.value.find(
      (option) => option.name === previousResultName
    )?.id || resultId.value
}

const auditResult = computed(() =>
  axeResults.find((result) => result.id === resultId.value)
)

watch(resultId, () => {
  router.replace({
    query: {
      resultId: resultId.value,
    },
  })
})

if (!resultId.value) {
  resultId.value = urlAndSelectorOptionsForSelectedScreenSize.value[0]?.id
}
</script>

<template>
  <div class="mb-24 space-y-6">
    <template v-if="auditInfo && auditInfo.config">
      <div
        class="flex flex-col-reverse gap-x-2 gap-y-4 md:flex-row md:justify-between"
      >
        <h1 class="font-medium">Audit: {{ auditInfo.config.title }}</h1>
        <div>
          <NuxtLink
            :to="`/audit/new?baseAuditId=${auditId}`"
            class="p-button p-button-outlined"
          >
            Repeat audit
          </NuxtLink>
        </div>
      </div>
      <Accordion>
        <AccordionTab header="Audit Information">
          <ul class="space-y-1">
            <li><span class="font-bold">Id: </span>#{{ auditId }}</li>
            <li>
              <span class="font-bold">Project: </span>
              {{ auditInfo.projects?.name }}
            </li>
            <li v-if="auditInfo.config?.description">
              <span class="font-bold">Description: </span>
              {{ auditInfo.config.description }}
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
              <ul class="list-disc pl-8">
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
            <li v-if="auditInfo.config.pages.length">
              <span class="font-bold">Pages:</span>
              <ul class="list-disc space-y-2 pl-8">
                <li
                  v-for="(page, index) in auditInfo.config.pages"
                  :key="index"
                >
                  <NuxtLink
                    :to="page.url"
                    target="_blank"
                  >
                    {{ page.url }}
                  </NuxtLink>
                  <template v-if="page.selector?.length">
                    - selector:
                    <code class="break-words rounded-md bg-gray-100 px-2 py-1">
                      {{ page.selector }}
                    </code>
                  </template>
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Screen sizes:</span>
              <ul class="list-disc pl-8">
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
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-[2fr_1fr]">
        <div v-if="!auditInfo.config.noAxe">
          <label
            for="url-selector"
            class="mb-2 block font-medium"
          >
            Url and selector
          </label>
          <Dropdown
            v-model="resultId"
            class="w-full"
            :options="urlAndSelectorOptionsForSelectedScreenSize"
            option-label="name"
            option-value="id"
            input-id="url-selector"
          />
        </div>
        <div :class="{ 'col-span-2': auditInfo.config.noAxe }">
          <label
            for="screen-size"
            class="mb-2 block font-medium"
          >
            Screen size
          </label>
          <Dropdown
            :model-value="screenSize"
            class="w-full"
            :options="auditInfo.config.viewports"
            input-id="screen-size"
            @update:model-value="changeScreenSize"
          />
        </div>
      </div>
      <AuditResults
        v-if="auditResult"
        :result="auditResult"
      />
    </template>
  </div>
</template>
