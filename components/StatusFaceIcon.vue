<script setup lang="ts">
defineProps<{
  statusList: string[]
}>()

// Icons source: https://www.svgrepo.com/collection/duotone-face-emoji-icons/
</script>

<template>
  <SvgoWorriedFace
    v-if="statusList.some((status) => status === 'Failed')"
    role="img"
  />
  <SvgoConfusedFace
    v-else-if="statusList.some((status) => status === 'Not tested')"
    role="img"
  />
  <SvgoSmilingFace
    v-else-if="statusList.some((status) => status === 'Passed')"
    role="img"
  />
  <SvgoWithoutMouthFace
    v-else
    role="img"
  />
</template>
