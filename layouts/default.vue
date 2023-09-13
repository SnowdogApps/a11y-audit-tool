<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

import type { MenuItem } from 'primevue/menuitem'

import {
  adminMenuItems,
  auditorMenuItems,
  customerMenuItems,
} from '~/data/menu'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greater('lg')
const isSideNavigationVisible = ref(isDesktop.value)
const { isAdmin, isAuditor } = useUser()

const menuItems = computed<MenuItem[]>(() =>
  isAdmin.value
    ? adminMenuItems
    : isAuditor.value
    ? auditorMenuItems
    : customerMenuItems
)

watch(isDesktop, (newValue: boolean) => {
  isSideNavigationVisible.value = newValue
})

onMounted(() => {
  isSideNavigationVisible.value = isDesktop.value
})
</script>

<template>
  <div class="layout mx-auto xl:container">
    <div
      class="layout-wrapper"
      :class="{
        'layout-wrapper--slim': isSideNavigationVisible,
      }"
    >
      <LazyAppHeader
        :is-side-navigation-visible="isSideNavigationVisible"
        @toggle-main-menu="isSideNavigationVisible = !isSideNavigationVisible"
      />
      <main>
        <slot />
      </main>
    </div>

    <AppSidebar
      :is-visible="isSideNavigationVisible"
      @close-main-menu="isSideNavigationVisible = false"
    >
      <Menu
        :model="menuItems"
        class="layout-menu"
      />
    </AppSidebar>
  </div>
</template>

<style>
body {
  background-color: var(--surface-ground);
}
</style>
