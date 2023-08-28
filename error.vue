<script>
export default {
  props: ['error'],
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div
      class="mb-32 flex flex-1 items-center justify-center px-4 py-16 text-center"
    >
      <div class="max-w-3xl">
        <h1 class="mb-16 text-9xl text-black">{{ error.statusCode }}</h1>
        <div class="mb-6 text-xl">
          {{ error.message }}
        </div>
        <NuxtLink
          to="/"
          class="p-button p-button-outlined"
        >
          <i class="pi pi-home mr-2" />
          <span> Back to home </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
