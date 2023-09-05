<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'

import {
  adminMenuItems,
  auditorMenuItems,
  customerMenuItems,
} from '~/data/menu'

const isSideNavigationVisible = ref(false)

const { isAdmin, isAuditor } = useUser()

const menuItems = computed<MenuItem[]>(() =>
  isAdmin.value
    ? adminMenuItems
    : isAuditor.value
    ? auditorMenuItems
    : customerMenuItems
)
</script>

<template>
  <div class="layout mx-auto xl:container">
    <div
      class="layout-wrapper"
      :class="{
        'layout-wrapper--slim': isSideNavigationVisible,
      }"
    >
      <AppHeader
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
