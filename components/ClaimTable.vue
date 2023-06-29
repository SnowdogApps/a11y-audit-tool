<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import type { Database } from 'types/supabase'

const confirm = useConfirm()
const props = defineProps<{
  profilesToProjects: Database['public']['Tables']['profile_project']['Row'][]
  isLoading: boolean
}>()

const confirmRemovalPermission = (id: number) => {
  confirm.require({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger',
    accept: () => {
      emit('remove', id)
    },
  })
}

const emit = defineEmits<{
  (e: 'remove', id: number): void
}>()

const nodes = ref([])
nodes.value = props.profilesToProjects.map((item) => ({
  key: item.id,
  data: {
    ...item,
  },
}))
</script>

<template>
  <TreeTable :value="nodes">
    <Column
      field="name"
      header="User"
    />
    <Column
      field="email"
      header="Email"
    />
    <Column header="Action">
      <template #body="scope">
        <Button
          icon="pi pi-times"
          type="button"
          aria-label="Remove permission"
          title="Remove permission"
          :loading="isLoading"
          :disabled="isLoading"
          severity="danger"
          @click="confirmRemovalPermission(scope.node.data.id)"
        />
      </template>
    </Column>
  </TreeTable>
</template>
