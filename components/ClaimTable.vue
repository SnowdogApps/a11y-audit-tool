<script setup lang="ts">
import type { TreeNode } from 'primevue/tree'
import { useConfirm } from 'primevue/useconfirm'
import type { ProfileProject } from 'types/user'

const confirm = useConfirm()
const props = defineProps<{
  profilesToProjects: ProfileProject[]
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

const nodes = computed(() =>
  props.profilesToProjects.map(
    (item): TreeNode => ({
      data: {
        ...item,
      },
    })
  )
)
</script>

<template>
  <TreeTable :value="nodes">
    <Column
      field="name"
      header="Project Name"
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
