<script setup lang="ts">
import type Ref from 'vue'
import type { User } from '@supabase/gotrue-js'
import type { ProfileMenuLink as MenuLink } from '~/types/profile-menu-link'

defineProps<{
  isSideNavigationVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()

const profileMenuList: MenuLink[] = [
  {
    iconClasses: 'pi pi-user text-xl text-primary',
    url: '/account/',
    text: 'Profile',
    subtitle: 'Account details',
  },
  {
    iconClasses: 'pi pi-power-off text-xl text-primary',
    command: () => logout(),
    text: 'Sign out',
  },
]

const isProfileMenuVisible = ref(false)

const client = useSupabaseAuthClient()
const user: Ref<User | null> = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  await navigateTo('/login')
}
</script>

<template>
  <div class="my-4 flex w-full items-center justify-between">
    <Button
      text
      rounded
      icon="pi pi-bars"
      aria-label="Toggle main menu"
      :aria-expanded="isSideNavigationVisible"
      aria-controls="side-navigation"
      @click="$emit('toggle-main-menu')"
    />

    <Button
      class="p-button-link !m-0 !rounded-full border !border-gray-500 !p-0"
      aria-label="Profile menu"
      @click="isProfileMenuVisible = true"
    >
      <img
        alt=""
        src="/avatar.svg"
        class="h-10 w-10"
      />
    </Button>

    <Sidebar
      v-model:visible="isProfileMenuVisible"
      position="right"
    >
      <div class="p-2">
        <strong>Welcome</strong>
        <p>{{ user?.email }}</p>
        <ul class="mt-4 grid gap-4">
          <li
            v-for="{
              iconClasses,
              url,
              text,
              subtitle,
              command,
            } in profileMenuList"
            :key="`profile-menu-link-${text}`"
          >
            <ProfileMenuLink
              :icon-classes="iconClasses"
              :url="url"
              :text="text"
              :subtitle="subtitle || ''"
              :command="command || undefined"
            />
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>
</template>
