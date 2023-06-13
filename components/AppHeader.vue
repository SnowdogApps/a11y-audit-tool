<script setup lang="ts">
import type { ProfileMenuLink as MenuLink } from '~/types/profile-menu-link'

defineProps<{
  isSideNavigationVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()

const profileMenuList: MenuLink[] = [
  {
    iconClasses: 'pi pi-user text-xl text-primary',
    url: '/account',
    text: 'Profile',
    subtitle: 'Account details',
  },
  {
    iconClasses: 'pi pi-money-bill text-xl text-primary',
    url: '/account/billing',
    text: 'Billing',
    subtitle: 'Check your fees',
  },
  {
    iconClasses: 'pi pi-cog text-xl text-primary',
    url: '/account/settings',
    text: 'Settings',
    subtitle: 'Select preferences',
  },
  {
    iconClasses: 'pi pi-power-off text-xl text-primary',
    url: '/auth/sign-out',
    text: 'Sign out',
  },
]

const isProfileMenuVisible = ref(false)

// const client = useSupabaseAuthClient()
// const user = useSupabaseUser()
//
// const { data: isAdmin } = await client.rpc('is_claims_admin')
//
// const logout = async () => {
//   await client.auth.signOut()
//   navigateTo('/')
// }
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
        <p>Anonymous</p>
        <ul class="mt-4 grid gap-4">
          <li
            v-for="{ iconClasses, url, text, subtitle } in profileMenuList"
            :key="`profile-menu-link-${text}`"
          >
            <ProfileMenuLink
              :icon-classes="iconClasses"
              :url="url"
              :text="text"
              :subtitle="subtitle || ''"
            />
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>

  <!--  <header-->
  <!--    class="flex items-center justify-center border-solid border-black md:justify-between"-->
  <!--  >-->
  <!--    <nav>-->
  <!--      <ul class="flex list-none">-->
  <!--        <li class="mr-2">-->
  <!--          <NuxtLink-->
  <!--            class="text-black"-->
  <!--            to="/me"-->
  <!--          >-->
  <!--            Settings-->
  <!--          </NuxtLink>-->
  <!--        </li>-->
  <!--        <li class="mr-2">-->
  <!--          <NuxtLink-->
  <!--            class="text-black"-->
  <!--            to="/audits"-->
  <!--          >-->
  <!--            Audits-->
  <!--          </NuxtLink>-->
  <!--        </li>-->
  <!--        <li class="mr-2">-->
  <!--          <NuxtLink-->
  <!--            class="text-black"-->
  <!--            to="/projects"-->
  <!--          >-->
  <!--            Projects-->
  <!--          </NuxtLink>-->
  <!--        </li>-->
  <!--        <li v-if="isAdmin">-->
  <!--          <NuxtLink-->
  <!--            class="text-black"-->
  <!--            to="/admin"-->
  <!--          >-->
  <!--            Admin-->
  <!--          </NuxtLink>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </nav>-->
  <!--    <div class="flex items-center">-->
  <!--      <button-->
  <!--        v-if="user"-->
  <!--        type="button"-->
  <!--        class="mx-2"-->
  <!--        @click="logout"-->
  <!--      >-->
  <!--        Logout-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </header>-->
</template>
