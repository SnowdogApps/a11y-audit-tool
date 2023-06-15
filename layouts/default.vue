<script setup lang="ts">
import { PrimeIcons } from 'primevue/api'
import type { MenuItem } from 'primevue/menuitem'
import type { Database } from 'types/supabase'
import type { UserClaim } from 'types/user'

const isSideNavigationVisible = ref(false)

const client = useSupabaseAuthClient()
const supabase = useSupabaseClient<Database>()
const { data: isAdmin } = await client.rpc('is_claims_admin')

const { data: claims } = (await supabase.rpc('get_my_claims')) as unknown as {
  data: UserClaim
}
const isAuditor = claims?.user_role === 'auditor'

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
  isAdmin && {
    label: 'Admin',
    items: [
      {
        label: 'Claims',
        icon: PrimeIcons.KEY,
        to: '/admin/',
      },
      {
        label: 'Projects',
        icon: PrimeIcons.FOLDER,
        to: '/projects/',
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
      (isAdmin || isAuditor) && {
        label: 'New',
        icon: PrimeIcons.PLUS,
        to: '/audit/new',
      },
    ].filter(Boolean),
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
    ].filter(Boolean),
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
