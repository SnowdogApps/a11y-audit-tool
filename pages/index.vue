<script setup lang="ts">
import type { Project } from 'types/database'
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: 'auth',
})

const projects = ref<Project[]>([])
const isLoading = ref(true)
const range = ref(5)
const visibleProjects = computed(() => projects.value.slice(0, range.value))

const isLoadMoreButtonAvailable = computed(
  () =>
    projects.value.length > 0 &&
    projects.value.length > visibleProjects.value.length
)

async function fetchProjects() {
  const supabase = useSupabaseClient<Database>()

  try {
    const { data } = await supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: true })
    projects.value = data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
  } finally {
    isLoading.value = false
  }
}

const showMoreProjects = () => {
  range.value = range.value + 5
}

onMounted(async () => await fetchProjects())
</script>

<template>
  <div class="grid grid-cols-1 space-y-4">
    <NuxtLink
      class="p-button p-button-lg p-button-info"
      to="/audit/new"
    >
      Create new Audit
    </NuxtLink>

    <div>
      <h2>Projects</h2>
      <Card>
        <template #content>
          <Spinner
            v-if="isLoading"
            class="mx-auto w-20"
          />
          <ul v-else-if="projects.length">
            <li
              v-for="{ id, name } in visibleProjects"
              :key="id"
            >
              <NuxtLink :to="`/audit/?projectId=${id}`">{{ name }}</NuxtLink>
            </li>
          </ul>
          <p v-else>Your projects list is empty</p>
        </template>
        <template
          v-if="isLoadMoreButtonAvailable"
          #footer
        >
          <Button @click="showMoreProjects">Show more projects</Button>
        </template>
      </Card>
    </div>

    <div>
      <h2>Audits</h2>
      <Card>
        <template #content>Audits</template>
      </Card>
    </div>
  </div>
</template>
