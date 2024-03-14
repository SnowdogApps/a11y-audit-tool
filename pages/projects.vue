<script setup lang="ts">
import type { Database } from 'types/supabase'
import type { Project } from 'types/database'

const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const projects = ref<Project[]>([])

if (user.value) {
  const { data } = await supabase.from('projects').select('*')
  projects.value = data || []
}
</script>

<template>
  <h1>Projects list</h1>
  <ul v-if="projects.length">
    <li
      v-for="{ id, name } in projects"
      :key="id"
    >
      {{ name }}
    </li>
  </ul>
  <p v-else>Your projects list is empty</p>
</template>
