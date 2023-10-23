<script lang="ts" setup>
const { origin, pathname, searchParams } = useRequestURL()
const sharableLink =
  origin +
  pathname +
  '?type=' +
  (searchParams.get('type') || 'review') +
  '&share=true'
const { copy, copied, isSupported } = useClipboard({
  source: sharableLink,
})
</script>

<template>
  <div>
    <h2 class="text-blue-900">Share report</h2>
    <div
      class="flex justify-between rounded-md border border-blue-900 bg-white"
    >
      <span class="break-all px-4 py-2">
        {{ sharableLink }}
      </span>
      <div>
        <button
          v-if="isSupported"
          class="h-full min-w-[80px] flex-1 cursor-pointer bg-blue-900 text-white"
          @click="copy()"
        >
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </button>
      </div>
    </div>
  </div>
</template>
