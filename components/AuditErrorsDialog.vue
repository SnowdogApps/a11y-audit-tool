<script lang="ts" setup>
defineProps<{
  header: string
  errorMessage: string
}>()
</script>

<template>
  <Dialog
    modal
    :header="header"
    class="w-full max-w-xl"
    dismissable-mask
  >
    <p class="mb-3">
      <span class="mb-3 block text-center text-lg text-red-700">
        Oops, something went wrong:
      </span>
      <span class="block whitespace-pre-line rounded-md bg-gray-100 p-4">
        {{ errorMessage }}
      </span>
    </p>
  </Dialog>
</template>
