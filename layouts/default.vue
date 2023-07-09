<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import type { Database } from 'types/supabase'
import type { UserClaim } from 'types/user'
import {
  adminMenuItems,
  auditorMenuItems,
  customerMenuItems,
} from '~/data/menu'

const isSideNavigationVisible = ref(false)
const menuItems = ref<MenuItem[]>([])

onBeforeMount(async () => {
  const supabase = useSupabaseClient<Database>()
  const { data: claims } = (await supabase.rpc('get_my_claims')) as unknown as {
    data: UserClaim
  }

  const isAdmin = claims?.claims_admin ?? false

  const isAuditor = !isAdmin && claims?.user_role === 'auditor'

  menuItems.value = isAdmin
    ? adminMenuItems
    : isAuditor
    ? auditorMenuItems
    : customerMenuItems
})
</script>

<template>
  <div class="layout">
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
