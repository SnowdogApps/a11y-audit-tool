<template>
  <footer
    class="mt-auto flex break-inside-avoid flex-col items-center pb-16 pt-10 print:pb-0"
  >
    <NuxtLink
      to="https://snow.dog"
      target="_blank"
    >
      <SvgoLogo
        class="mb-4 w-60"
        aria-hidden="true"
      />
      <span class="sr-only">Snowdog website</span>
    </NuxtLink>
    <NuxtLink
      to="mailto:accessibility@snow.dog"
      class="text-lg"
    >
      accessibility@snow.dog
    </NuxtLink>
  </footer>
</template>
