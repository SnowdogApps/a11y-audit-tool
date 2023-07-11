<script setup lang="ts">
import type { TreeNode } from 'primevue/tree'
import type { Project } from 'types/database'

const props = defineProps<{
  projects: Project[]
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
