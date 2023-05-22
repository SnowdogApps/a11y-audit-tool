<script setup lang="ts">
defineProps<{
  isSidebarVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()
const route = useRoute()
console.log(toRef(route))
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
        <div class="p-sidebar-header">
          <slot name="logo">
            Logo
          </slot>
        </div>
        <div class="p-sidebar-content">
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
