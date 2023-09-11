<script setup lang="ts">
import type { Project } from 'types/database'

const props = withDefaults(
  defineProps<{
    projects: Project[]
    initialCount?: number
    step?: number
    isLoading?: boolean
  }>(),
  {
    initialCount: 0,
    step: 5,
    isLoading: false,
  }
)

const count = ref(
  props.initialCount ? props.initialCount : props.projects.length
)
const showMore = () => {
  count.value = count.value + props.step
}

const visibleProjects = computed(() => props.projects.slice(0, count.value))

const isShowMoreButtonAvailable = computed(
  () =>
    props.projects.length > 0 &&
    props.initialCount &&
    count.value < props.projects.length
)
</script>

<template>
  <Card>
    <template #title>
      <h2 id="project-card-title">Your projects</h2>
    </template>
    <template #content>
      <Spinner
        v-if="isLoading"
        class="mx-auto w-20"
      />
      <ul
        v-else-if="visibleProjects.length"
        aria-labelledby="project-card-title"
        class="grid space-y-2"
      >
        <li
          v-for="{ id, name } in visibleProjects"
          :key="id"
        >
          <NuxtLink
            class="p-button p-button-link grid w-full justify-between"
            :to="`/audit/?projectId=${id}`"
          >
            <span class="text-left">{{ name }}</span>
            <span class="p-button p-button-info ml-4">See all audits</span>
          </NuxtLink>
        </li>
      </ul>
      <p v-else>Your projects list is empty</p>
    </template>
    <template
      v-if="isShowMoreButtonAvailable"
      #footer
    >
      <Button @click="showMore">Show more projects</Button>
    </template>
  </Card>
</template>
