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
</template>
