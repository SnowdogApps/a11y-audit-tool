<script setup lang="ts">
import { PrimeIcons } from 'primevue/api'
import type { MenuItem } from 'primevue/menuitem'

const isSideNavigationVisible = ref(false)
const menuItems = computed<MenuItem[]>(() => [
  {
    label: 'Dashboard',
    items: [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        to: '/',
      },
    ],
  },
  {
    label: 'Audit',
    items: [
      {
        label: 'List',
        icon: PrimeIcons.LIST,
        to: '/audit',
      },
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
        to: '/audit/new',
      },
    ],
  },
  {
    label: 'Auth',
    items: [
      {
        label: 'Login',
        icon: PrimeIcons.SIGN_IN,
        to: '/login',
      },
      {
        label: 'Register',
        icon: PrimeIcons.VERIFIED,
        to: '/register',
      },
    ],
  },
])
</script>

<template>
  <div class="layout">
    <main
      class="layout-wrapper"
      :class="{
        'layout-wrapper--slim': isSideNavigationVisible,
      }"
    >
      <div class="m-[32px_auto]">
        <AppHeader
          :is-side-navigation-visible="isSideNavigationVisible"
          @toggle-main-menu="isSideNavigationVisible = !isSideNavigationVisible"
        />
        <slot />
      </div>
    </main>

    <AppSidebar
      :is-visible="isSideNavigationVisible"
      @toggle-main-menu="isSideNavigationVisible = !isSideNavigationVisible"
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
