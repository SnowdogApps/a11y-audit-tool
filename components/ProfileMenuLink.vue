<script setup lang="ts">
import type { ProfileMenuLink } from '~/types/profile-menu-link'

defineProps<ProfileMenuLink>()
</script>

<template>
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
    v-else
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
</template>
