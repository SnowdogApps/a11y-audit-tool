<script setup lang="ts">
import type { TreeTableExpandedKeys } from 'primevue/treetable'
import { useConfirm } from 'primevue/useconfirm'
import type { Audit } from 'types/database'

const props = defineProps<{
  audits: Audit[]
}>()

const emit = defineEmits<{ (e: 'delete-audit'): void }>()

const confirm = useConfirm()
const nodes = computed(() =>
  props.audits.map((audit) => ({
    data: {
      ...audit,
    },
  }))
)

const filters = ref<TreeTableExpandedKeys>({ global: '', project: '' })
const { isAdmin } = useUser()
const confirmAuditRemoval = (id: number) => {
  confirm.require({
    message: 'Do you want to delete this audit?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger',
    accept: () => {
      emit('delete-audit', id)
    },
  })
}
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
            v-model="filters.global"
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
          v-model="filters.project"
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
            v-if="scope.node.data.axe.length"
            class="p-button p-button-info mr-2"
            :to="`/audit/${scope.node.data.id}`"
            icon="pi pi-file-edit"
            aria-label="Results"
            title="Display results"
          >
            <i class="pi pi-list" />
          </NuxtLink>

          <Button
            v-if="isAdmin"
            text
            icon="pi pi-times"
            severity="danger"
            aria-label="Remove audit"
            @click="confirmAuditRemoval(scope.node.data.id)"
          />
        </div>
      </template>
    </Column>
  </TreeTable>
</template>
