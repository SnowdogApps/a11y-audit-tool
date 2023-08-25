<script lang="ts" setup>
defineProps<{
  test: {
    info: Record<string, string>
    results: Record<string, string | unknown>[]
  }
}>()
</script>

<template>
  <div class="border-b-2 py-8">
    <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.5fr_160px_1fr_1fr]">
      <TrustedTestInfo :info="test.info" />
      <slot />
    </div>
    <div
      v-if="test.results.length"
      class="mt-4"
    >
      <p class="mb-4 font-bold">
        Automatic test results for WCAG SC
        {{ test.info['WCAG SC'] }}:
      </p>
      <Accordion>
        <AccordionTab
          v-for="(result, index) in test.results"
          :key="index"
        >
          <template #header>
            <div>
              <span class="mr-4">
                {{ result.helper.help }}
              </span>
              <Tag
                :value="result.type"
                :severity="
                  result.type === 'passes'
                    ? 'success'
                    : result.type === 'violations'
                    ? 'danger'
                    : 'info'
                "
                rounded
              />
            </div>
          </template>
          <AxeResultView :test="result" />
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
