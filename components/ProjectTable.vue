<script setup lang="ts">
import type { Database } from 'types/supabase'

const props = defineProps<{
  projects: Database['public']['Tables']['projects']['Row'][]
}>()

onMounted(() => {
  nodes.value = props.projects.map((project) => ({
    key: project.id,
    data: {
      ...project,
    },
  }))
})

const nodes = ref()
</script>

<template>
  <Card class="mb-6">
    <template #content>
      <TreeTable :value="nodes">
        <Column
          field="id"
          header="Id"
          expander
        />
        <Column
          field="name"
          header="Name"
        />
        <Column
          field="description"
          header="Description"
        />
      </TreeTable>
      <section class="mr-4">
        <h2 class="underline">Project list</h2>
        <ul
          v-if="projects.length"
          class="mr-4"
        >
          <li
            v-for="{ id, name } in projects"
            :key="id"
          >
            Name: <span class="underline">{{ name }}</span> ID:
            <span class="underline">{{ id }}</span>
          </li>
        </ul>
        <p
          v-else
          class="ml-4"
        >
          Project list is empty.
        </p>
      </section>
    </template>
  </Card>
</template>
