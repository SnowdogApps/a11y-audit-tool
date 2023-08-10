<script setup lang="ts">
import type { ProfileWithEmail } from 'types/user'

const props = defineProps<{
  profiles: ProfileWithEmail[]
}>()

const nodes = computed(() =>
  props.profiles.map((profile) => ({
    data: {
      ...profile,
      name: `${profile.email} ${
        profile.username ? `[${profile.username}]` : ''
      }`,
    },
  }))
)
</script>

<template>
  <TreeTable
    :value="nodes"
    :paginator="true"
    :rows="10"
    :rows-per-page-options="[10, 25, 50]"
  >
    <Column
      field="id"
      header="Id"
      expander
    />
    <Column
      field="name"
      header="User"
    />
    <Column
      field="email"
      header="Email"
    />
  </TreeTable>
</template>
