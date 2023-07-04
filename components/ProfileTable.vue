<script setup lang="ts">
import type { ProfileWithEmail } from 'types/supabase'

const props = defineProps<{
  profiles: ProfileWithEmail[]
}>()

onMounted(() => {
  nodes.value = props.profiles.map((profile) => ({
    key: profile.id,
    data: {
      ...profile,
      name: `${profile.email} ${
        profile.username ? `[${profile.username}]` : ''
      }`,
    },
  }))
})

const nodes = ref()
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
