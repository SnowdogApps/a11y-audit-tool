<script lang="ts" setup>
import IconLogo from 'assets/icons/logo.svg'

defineProps<{
  isSideNavigationVisible: boolean
}>()

defineEmits<{ (e: 'toggle-main-menu'): void }>()

const isProfileMenuVisible = ref(false)
</script>
<template>
  <div class="my-4 flex w-full items-center justify-between">
    <Button
      text
      rounded
      icon="pi pi-bars"
      aria-label="Toggle sidebar"
      :aria-expanded="isSideNavigationVisible"
      aria-controls="side-navigation"
      @click="$emit('toggle-main-menu')"
    />

    <Button
      class="p-button-link border !border-gray-500 rounded !rounded-full !p-0 !m-0"
      @click="isProfileMenuVisible = true"
    >
      <img alt="" src="/avatar.svg" class="w-10 h-10" />
    </Button>

    <Sidebar
      v-model:visible="isProfileMenuVisible"
      position="right"
    >
      <div class="p-2">
        <strong>Welcome</strong>
        <p>Anonymous</p>
        <ul class="grid gap-4 mt-4">
          <li>
            <NuxtLink
              class="w-full flex p-3 items-center border-neutral-400
              border rounded border-solid hover:bg-neutral-100
               transition-colors transition-duration-150"
              to="/account"
            >
              <span><i class="pi pi-user text-xl text-primary"></i></span>
              <div class="ml-3">
                <span class="mb-2 font-semibold">Profile</span>
                <p class="text-color-secondary m-0">Account details</p>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-full flex p-3 items-center border-neutral-400
              border rounded border-solid hover:bg-neutral-100
               transition-colors transition-duration-150"
              to="/account/billing"
            >
              <span><i class="pi pi-money-bill text-xl text-primary"></i></span>
              <div class="ml-3"><span class="mb-2 font-semibold">Billing</span><p class="text-color-secondary m-0">Check your fees</p></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-full flex p-3 items-center border-neutral-400
              border rounded border-solid hover:bg-neutral-100
               transition-colors transition-duration-150"
              to="/account/settings"
            >
              <span><i class="pi pi-cog text-xl text-primary"></i></span>
              <div class="ml-3"><span class="mb-2 font-semibold">Settings</span><p class="text-color-secondary m-0">Exercitation veniam</p></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-full flex p-3 items-center border-neutral-400
              border rounded border-solid hover:bg-neutral-100
               transition-colors transition-duration-150"
              to="/auth/sign-out"
            >
              <span><i class="pi pi-power-off text-xl text-primary"></i></span>
              <div class="ml-3"><span class="mb-2 font-semibold">Sign Out</span></div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>
</template>
