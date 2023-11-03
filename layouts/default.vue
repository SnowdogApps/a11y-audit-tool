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
const isSideNavigationVisible = ref(false)
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

const { y: windowScrollY } = useWindowScroll()
</script>

<template>
  <div class="layout mx-auto xl:container">
    <div
      class="layout-wrapper"
      :class="{
        'layout-wrapper--slim': isSideNavigationVisible,
      }"
    >
      <a
        id="skip-navigation-link"
        href="#main-content"
        class="sr-only -translate-y-16 scale-90 transition focus:not-sr-only focus:absolute focus:z-20 focus:translate-y-0 focus:scale-100"
      >
        <div class="p-button">Skip Navigation</div>
      </a>
      <ClientOnly>
        <AppHeader
          :is-side-navigation-visible="isSideNavigationVisible"
          @toggle-main-menu="isSideNavigationVisible = !isSideNavigationVisible"
        />
      </ClientOnly>
      <main
        id="main-content"
        ref="mainContent"
        tabindex="-1"
      >
        <slot />
      </main>
      <div
        v-show="windowScrollY > 800"
        class="fixed right-4 z-20 w-full print:hidden"
        :class="
          typeof $route.name === 'string' &&
          ['audit-id', 'audit-report-id'].includes($route.name)
            ? 'bottom-[80px]'
            : 'bottom-4'
        "
      >
        <div class="flex w-full justify-end px-4 pb-1 xl:container xl:mx-auto">
          <a
            class="p-button p-button-rounded p-button-icon-only !h-12 !w-12 !opacity-80 hover:!opacity-100"
            rounded
            aria-label="Go back to top"
            href="#main-content"
          >
            <i
              class="pi pi-arrow-up"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="print:hidden">
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
    <div class="hidden print:block">
      <AppFooter />
    </div>
  </div>
</template>

<style>
body {
  background-color: var(--surface-ground);
}

html {
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
}
</style>
