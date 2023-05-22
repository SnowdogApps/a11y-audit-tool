<script lang="ts" setup>
defineProps<{
  isSideNavigationVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()
</script>
<template>
  <div class="my-4 flex w-full items-center">
    <Button
      text
      rounded
      icon="pi pi-bars"
      aria-label="Toggle sidebar"
      :aria-expanded="isSideNavigationVisible"
      aria-controls="side-navigation"
      @click="$emit('toggle-main-menu')"
    />
    <NuxtLink
      class="ml-10"
      to="/"
    >
      Logo
    </NuxtLink>
    <!-- search -->
    <!-- profile menu -->
  </div>
</template>
