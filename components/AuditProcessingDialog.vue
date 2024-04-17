<script lang="ts" setup>
import { oneMinuteInMilliseconds } from 'utils/time'

const props = defineProps<{
  auditId: number
}>()

const client = useSupabaseClient()
const isAuditFinished = ref(false)
const axeErrorMessage = ref<string>()

const axeTableInsertChannel = client
  .channel('table-db-changes')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'axe',
    },
    (payload) => {
      if (payload.new.audit_id === props.auditId) {
        if (payload.new.errors) {
          axeErrorMessage.value = payload.new.errors[0]?.message
        }
        isAuditFinished.value = true
        client.removeChannel(axeTableInsertChannel)
        clearTimeout(timeout)
      }
    }
  )
  .subscribe()

const timeout = setTimeout(() => {
  client.removeChannel(axeTableInsertChannel)
  axeErrorMessage.value = 'Something went wrong, test malformed.'
  isAuditFinished.value = true
}, 15 * oneMinuteInMilliseconds)

defineEmits<{
  (e: 'close', { resetAuditForm }?: { resetAuditForm: boolean }): void
}>()
</script>

<template>
  <Dialog
    modal
    class="w-full max-w-xl"
    dismissable-mask
  >
    <template #header>
      <h2 class="font-medium">New audit processing</h2>
    </template>
    <div aria-live="polite">
      <div
        v-if="isAuditFinished"
        class="flex min-h-[200px] items-center justify-center"
      >
        <div v-if="axeErrorMessage">
          <p class="mb-3">
            <span class="mb-3 block text-center text-lg text-red-700">
              Oops, something went wrong:
            </span>
            <span class="block whitespace-pre-line rounded-md bg-gray-100 p-4">
              {{ axeErrorMessage }}
            </span>
          </p>
          <Button
            class="!block !w-full"
            outlined
            @click="$emit('close', { resetAuditForm: false })"
          >
            Repeat audit
          </Button>
        </div>
        <div v-else>
          <p class="mb-6 text-center text-lg">
            Automatic tests finished successfully!
          </p>
          <NuxtLink
            class="p-button !block"
            :to="`/audit/${auditId}`"
          >
            View audit results
          </NuxtLink>
        </div>
      </div>
      <template v-else>
        <p class="mb-6 text-center text-lg">
          Your audit has been initiated and is currently being processed. Please
          wait a few minutes for automatic tests results to be generated. A link
          to the audit results will be provided here and in the
          <NuxtLink to="/audit">Audit List</NuxtLink>.
        </p>
        <ProgressBar
          class="mb-3"
          mode="indeterminate"
        />
        <Button
          class="!block !w-full"
          text
          @click="$emit('close')"
        >
          Create another audit in the meantime
        </Button>
      </template>
    </div>
  </Dialog>
</template>
