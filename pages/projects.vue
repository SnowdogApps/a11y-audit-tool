<script setup lang="ts">
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const projects = ref<Database['public']['Tables']['projects']['Row'][]>([])

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
