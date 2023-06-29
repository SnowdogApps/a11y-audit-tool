<script setup lang="ts">
import type { Database } from 'types/supabase'

const props = defineProps<{
  audits: Database['public']['Tables']['audits']['Row'][]
}>()

onMounted(() => {
  nodes.value = props.audits.map((audit) => ({
    key: audit.id,
    data: {
      ...audit,
    },
  }))
})
const nodes = ref()
const filters = ref({})
</script>

<template>
  <TreeTable
    :value="nodes"
    :filters="filters"
  >
    <template #header>
      <div class="text-right">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="filters['global']"
            placeholder="Global Search"
          />
        </div>
      </div>
    </template>
    <Column header="Created : Id">
      <template #body="{ node }">
        {{ new Date(node.data.created_at).toLocaleDateString('pl-PL') }} :
        {{ node.data.id }}
      </template>
    </Column>
    <Column
      field="project"
      header="Project"
    >
      <template #filter>
        <InputText
          v-model="filters['project']"
          type="text"
          class="p-column-filter"
          placeholder="Filter by project"
        />
      </template>
    </Column>
    <Column
      field="status"
      header="Status"
    />
    <Column header="Action">
      <template #body="scope">
        <div class="inline-grid grid-cols-2 gap-2">
          <NuxtLink
            class="p-button"
            :to="`/audit/edit/${scope.node.data.id}`"
            aria-label="Edit audit"
            title="Edit audit"
          >
            <i class="pi pi-file-edit" />
          </NuxtLink>
          <NuxtLink
            class="p-button p-button-info"
            :to="`/audit/results/${scope.node.data.id}`"
            icon="pi pi-file-edit"
            aria-label="Results"
            title="Display results"
          >
            <i class="pi pi-list" />
          </NuxtLink>
        </div>
      </template>
    </Column>
  </TreeTable>
</template>
