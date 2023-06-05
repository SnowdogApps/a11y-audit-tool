<script setup lang="ts">
defineProps<{
  isVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()
</script>

<template>
  <div
    class="layout-sidebar"
    :class="{
      'layout-sidebar--active': isVisible,
    }"
  >
    <div
      id="side-navigation"
      class="p-sidebar p-component h-full"
      role="region"
      aria-modal="true"
    >
      <span
        class="p-hidden-accessible p-hidden-focusable"
        tabindex="0"
        aria-hidden="true"
        role="presentation"
      />
      <div class="p-sidebar-header !m-0 !px-4 !py-6">
        <SvgoLogo
          aria-label="main website logo - Snowdog company"
          class="!h-auto !w-full"
        />
      </div>

      <div class="p-sidebar-content !p-0">
        <slot />
      </div>
      <span
        class="p-hidden-accessible p-hidden-focusable"
        tabindex="0"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  </div>
  <div
    class="layout-mask"
    :class="{
      'layout-mask--active': isVisible,
    }"
    @click="$emit('toggle-main-menu')"
  />
</template>
