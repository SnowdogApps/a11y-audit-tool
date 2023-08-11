<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import type { TreeTableExpandedKeys } from 'primevue/treetable'
import type {
  ProfileProject,
  RemoveFromProjectPayload,
  ProfileProjectMap,
} from 'types/user'

const filters = ref<TreeTableExpandedKeys>({ name: '', email: '', role: '' })
const confirm = useConfirm()
const props = defineProps<{
  profilesToProjects: ProfileProject[]
  isLoading: boolean
}>()

const confirmRemovalPermission = (userId: string, projectId: number) => {
  confirm.require({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger',
    accept: () => {
      emit('remove', { userId, projectId })
    },
  })
}

const emit = defineEmits<{
  (e: 'remove', payload: RemoveFromProjectPayload): void
}>()

const nodes = computed(() => {
  const projectsMap: ProfileProjectMap[] = []

  props.profilesToProjects.forEach((item: ProfileProject) => {
    const { projectId, name, email, userId, metadata } = item
    if (!projectsMap[projectId]) {
      projectsMap[projectId] = {
        key: `${projectId}_${userId}`,
        data: {
          name,
          projectId,
          action: false,
        },
        children: [],
      }
    }

    projectsMap[projectId].children?.push({
      key: `${projectId}_${userId}`,
      data: {
        email,
        userId,
        projectId,
        action: true,
        role: metadata.user_role,
      },
    })
  })

  return Object.values(projectsMap)
})
</script>

<template>
  <TreeTable
    :value="nodes"
    :filters="filters"
    filter-mode="lenient"
    :paginator="true"
    :rows="10"
    :rows-per-page-options="[10, 25, 50]"
  >
    <Column
      field="name"
      header="Project Name"
      expander
      sortable
    >
      <template #filter>
        <InputText
          v-model="filters['name']"
          type="text"
          class="p-column-filter"
          placeholder="Filter by name"
        />
      </template>
    </Column>
    <Column
      field="email"
      header="User Email"
    >
      <template #filter>
        <InputText
          v-model="filters['email']"
          type="text"
          class="p-column-filter"
          placeholder="Filter by email"
        />
      </template>
    </Column>
    <Column
      field="role"
      header="User Role"
    >
      <template #filter>
        <InputText
          v-model="filters['role']"
          type="text"
          class="p-column-filter"
          placeholder="Filter by role"
        />
      </template>
    </Column>
    <Column
      header="Action"
      name="action"
    >
      <template #body="scope">
        <Button
          v-if="scope.node.data.action"
          type="button"
          aria-label="Remove permission"
          title="Remove permission"
          :loading="isLoading"
          :disabled="isLoading"
          severity="danger"
          @click="
            confirmRemovalPermission(
              scope.node.data.userId,
              scope.node.data.projectId
            )
          "
        >
          Remove
        </Button>
      </template>
    </Column>
  </TreeTable>
</template>
