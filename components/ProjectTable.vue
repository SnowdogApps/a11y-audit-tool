<script setup lang="ts">
import type { TreeNode } from 'primevue/tree'
import type { Database } from 'types/supabase'

const props = defineProps<{
  projects: Database['public']['Tables']['projects']['Row'][]
}>()

const nodes = computed(() =>
  props.projects.map(
    (project): TreeNode => ({
      data: {
        ...project,
      },
    })
  )
)
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
