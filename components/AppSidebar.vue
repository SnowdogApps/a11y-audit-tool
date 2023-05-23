<script setup lang="ts">
import IconLogo from '~/assets/icons/logo.svg'
defineProps<{
  isSidebarVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()
</script>

<template>
    <div
      class="layout-sidebar"
      :class="{
        'layout-sidebar--active': isSidebarVisible,
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
          <IconLogo class="!w-full !h-auto"/>
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
          'layout-mask--active': isSidebarVisible,
        }"
      @click="$emit('toggle-main-menu')"
    />
</template>
