<script setup lang="ts">
import type { TreeTableExpandedKeys } from 'primevue/treetable'
import { useConfirm } from 'primevue/useconfirm'
import type { ExtendedAudit, Project } from 'types/database'
import { statuses } from '~/data/auditStatuses'

const props = defineProps<{
  audits: ExtendedAudit[]
  projects: Project[]
  projectId?: number
  showUserAudits?: boolean
}>()

const emit = defineEmits<{ (e: 'delete-audit', id: number): void }>()

const confirm = useConfirm()
const { user } = useUser()
const router = useRouter()
const nodes = computed(() =>
  props.audits.map((audit) => ({
    data: {
      ...audit,
      project: audit.projects.name,
      auditor: audit.profiles.username,
    },
  }))
)

const projectFilterOptions = computed(() => {
  const options = props.projects.map(({ name, id }) => ({
    name,
    value: name,
    id,
  }))

  options.unshift({
    name: 'All',
    value: '',
    id: 0,
  })

  return options
})

const statusOptions = computed(() => {
  const options = statuses.map((status) => ({
    name: status,
    value: status,
  }))
  options.unshift({
    name: 'All',
    value: '',
  })

  return options
})

const allAuditorIds = computed(() =>
  props.audits.map(({ profile_id: profileId }) => profileId)
)

const uniqueAuditorFilterOptions = computed(() => {
  const options = props.audits
    .filter(
      ({ profile_id: profileId }, index) =>
        !allAuditorIds.value.includes(profileId, index + 1)
    )
    .map((audit) => ({
      name: audit.profiles.username,
      value: audit.profiles.username,
      id: audit.profile_id,
    }))

  options.unshift({
    name: 'All',
    value: '',
    id: '',
  })

  return options
})

const selectedProject = ref(
  projectFilterOptions.value.find(({ id }) => id === props?.projectId) ||
    projectFilterOptions.value[0]
)
const selectedAuditor = ref(
  props.showUserAudits
    ? uniqueAuditorFilterOptions.value.find(({ id }) => id === user.value.id)
    : uniqueAuditorFilterOptions.value[0]
)
const selectedStatus = ref(statusOptions.value[0])

const filters = computed<TreeTableExpandedKeys>(() => ({
  global: '',
  project: selectedProject.value.value,
  auditor: selectedAuditor.value.value,
  status: selectedStatus.value.value,
}))

const columns = [
  { field: 'config.title', header: 'Title', sortable: true, start: true },
  { field: 'project', header: 'Project', sortable: true, start: true },
  {
    field: 'auditor',
    header: 'Auditor',
    sortable: true,
    start: props.showUserAudits,
  },
  { field: 'status', header: 'Status', sortable: true },
  { field: 'urls', header: 'Urls', start: true },
]
const selectedColumns = ref(columns.filter((col) => col.start))

const isFilterActive = (filterField: string) =>
  selectedColumns.value.some(({ field }) => field === filterField)

const { isAdmin } = useUser()

const confirmAuditRemoval = (id: number) => {
  confirm.require({
    message: 'Do you want to delete this audit?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger !pr-6',
    accept: () => {
      emit('delete-audit', id)
    },
  })
}

watch([selectedProject, selectedAuditor, selectedColumns], (newValues) => {
  let query = {}

  if (
    newValues[2].some(({ field }) => field === 'project') &&
    newValues[0]?.id
  ) {
    query = { ...query, projectId: newValues[0].id }
  }

  if (
    newValues[2].some(({ field }) => field === 'auditor') &&
    newValues[1]?.id === user.value.id
  ) {
    query = { ...query, user: 'me' }
  }

  router.replace({
    query,
  })
})
</script>

<template>
  <TreeTable
    :auto-layout="true"
    size="small"
    show-gridlines
    :value="nodes"
    :filters="filters"
  >
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex w-full items-center lg:w-2/4">
          <label
            class="mr-2 shrink"
            for="select-columns"
          >
            Select columns
          </label>
          <MultiSelect
            v-model="selectedColumns"
            input-id="select-columns"
            :options="columns"
            option-label="header"
            class="w-full overflow-auto lg:w-auto"
            display="chip"
            placeholder="Select Columns"
          />
        </div>

        <div class="p-input-icon-left w-full lg:w-1/4">
          <i class="pi pi-search" />
          <InputText
            v-model="filters.global"
            placeholder="Global Search"
            class="w-full"
          />
        </div>
      </div>

      <div class="mt-3 flex flex-col gap-3 lg:flex-row">
        <div
          v-if="isFilterActive('project')"
          class="flex w-full items-center"
        >
          <label
            class="mr-2 shrink-0"
            for="filter-projects"
          >
            Filter by projects
          </label>
          <Dropdown
            v-model="selectedProject"
            input-id="filter-projects"
            aria-label="Filter by project"
            :options="projectFilterOptions"
            option-label="name"
            placeholder="Filter by project"
            class="w-full"
            data-testid="audits-project-filter-select"
          />
        </div>
        <div
          v-if="isFilterActive('auditor')"
          class="flex w-full items-center"
        >
          <label
            class="mr-2 shrink-0"
            for="filter-auditor"
          >
            Filter by auditor
          </label>
          <Dropdown
            id="auditor-filter"
            v-model="selectedAuditor"
            aria-label="Filter by auditor"
            :options="uniqueAuditorFilterOptions"
            option-label="name"
            placeholder="Filter by auditor"
            class="w-full"
            data-testid="audits-auditor-filter-select"
          />
        </div>

        <div
          v-if="isFilterActive('status')"
          class="flex w-full items-center"
        >
          <label
            class="mr-2 shrink-0"
            for="filter-status"
          >
            Filter by status
          </label>
          <Dropdown
            id="status-filter"
            v-model="selectedStatus"
            aria-label="Filter by status"
            :options="statusOptions"
            option-label="name"
            placeholder="Filter by status"
            class="w-full"
            data-testid="audits-status-filter-select"
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
      v-for="col of selectedColumns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
    >
      <template
        v-if="col.field === 'urls'"
        #body="scope"
      >
        <ul>
          <li
            v-for="(page, pageIndex) in scope.node.data.config.pages"
            :key="`page-${scope.node.data.id}-${pageIndex}`"
          >
            <a :href="page.url">
              {{ page.url }}
            </a>
          </li>
        </ul>
      </template>
    </Column>

    <Column header="Action">
      <template #body="scope">
        <div class="flex gap-2">
          <NuxtLink
            v-if="scope.node.data.status === 'completed'"
            class="p-button p-button-info mr-2"
            :to="`/audit/report/${scope.node.data.id}?type=${scope.node.data.report_type}`"
            aria-label="Report"
            title="Display report"
          >
            <i class="pi pi-list" />
          </NuxtLink>
          <NuxtLink
            v-else-if="scope.node.data.axe.length"
            class="p-button p-button-info mr-2"
            :to="`/audit/${scope.node.data.id}?resultId=${scope.node.data.axe[0].id}`"
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
    <template #empty>
      <div class="p-2 text-center">The list is empty</div>
    </template>
  </TreeTable>
</template>
