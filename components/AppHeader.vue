<script setup lang="ts">
import type Ref from 'vue'
import type { User } from '@supabase/gotrue-js'
import type { ProfileMenuLink } from '~/types/profile-menu-link'

defineProps<{
  isSideNavigationVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()

const profileMenuList: ProfileMenuLink[] = [
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
        <p v-if="user?.email">
          {{ user.email }}
        </p>
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
            <NuxtLink
              v-if="url"
              class="transition-duration-150 flex w-full items-center rounded border border-solid border-neutral-400 p-3 transition-colors hover:bg-neutral-100"
              :to="url"
            >
              <span><i :class="iconClasses" /></span>
              <div class="ml-3">
                <span class="mb-2 font-semibold">{{ text }}</span>
                <p
                  v-if="subtitle"
                  class="text-color-secondary m-0"
                >
                  {{ subtitle }}
                </p>
              </div>
            </NuxtLink>

            <Button
              v-if="!url && command"
              outlined
              class="transition-duration-150 flex w-full items-center rounded border border-solid border-neutral-400 p-3 transition-colors hover:bg-neutral-100"
              @click="command"
            >
              <span><i :class="iconClasses" /></span>
              <div class="ml-3">
                <span class="mb-2 font-semibold">{{ text }}</span>
                <p
                  v-if="subtitle"
                  class="text-color-secondary m-0"
                >
                  {{ subtitle }}
                </p>
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>
</template>
