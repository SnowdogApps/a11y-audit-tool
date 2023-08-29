<script setup lang="ts">
import type { ProfileWithEmail } from 'types/user'

const props = defineProps<{
  profiles: ProfileWithEmail[]
}>()

const nodes = computed(() =>
  props.profiles.map((profile) => ({
    data: {
      userType: profile.user_type,
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
    :auto-layout="true"
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
    <Column
      field="userType"
      header="User Type"
    />
  </TreeTable>
</template>
