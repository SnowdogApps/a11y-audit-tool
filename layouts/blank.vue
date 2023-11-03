<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <div class="layout mx-auto xl:container">
      <main class="layout-wrapper">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style>
body {
  background-color: var(--surface-ground);
}
</style>
