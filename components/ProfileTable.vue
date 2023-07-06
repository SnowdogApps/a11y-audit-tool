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
  <TreeTable :value="nodes">
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
