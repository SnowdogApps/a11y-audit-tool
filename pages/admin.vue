<script setup lang="ts">
// @note: this page is just a draft of concept

import type { User } from '@supabase/gotrue-js'
import type { Database } from 'types/supabase'

definePageMeta({
  middleware: [
    'auth',
    defineNuxtRouteMiddleware(async () => {
      const { data } = await useSupabaseClient<Database>().rpc(
        'is_claims_admin'
      )

      if (!data) {
        abortNavigation({
          message: 'You are not allowed to be here. Go away!',
        })
      }
    }),
  ],
})

const supabase = useSupabaseClient<Database>()

const profiles = ref<Database['public']['Tables']['profiles']['Row'][]>([])
const authData = ref<User[]>([])
const projects = ref<Database['public']['Tables']['projects']['Row'][]>([])

const profileProject = ref<
  Database['public']['Tables']['profile_project']['Row'][]
>([])

const getAuthDataById = (id: string) =>
  authData.value.find((user) => user.id === id)

const getUsersWithEmails = computed(() =>
  profiles.value.map((profile) => ({
    ...profile,
    email: getAuthDataById(profile.id)?.email,
  }))
)
const getProfileProject = computed(() =>
  profileProject.value.map((permission) => {
    const user = getAuthDataById(permission.profile_id)
    const projectData = projects.value.find(
      (project) => project.id === permission.project_id
    )

    return {
      id: permission.id,
      email: user?.email,
      name: projectData?.name,
    }
  })
)

async function fetchProfiles() {
  const { data: authUsers } = await useFetch<{
    users: User[]
    aud: string
    nextPage: number | null
    lastPage: number
    total: number
  }>('/api/users')
  const { data } = await supabase.from('profiles').select('*')

  authData.value = authUsers.value.users || []
  profiles.value = data || []
}

async function fetchProjects() {
  const { data } = await supabase.from('projects').select('*')
  projects.value = data || []
}

async function fetchProjectProfile() {
  const { data } = await supabase.from('profile_project').select('*')
  profileProject.value = data || []
}

async function removeProfileFromProject(id: number) {
  try {
    const { error } = await supabase
      .from('profile_project')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    fetchProjectProfile()
  } catch (err) {
    console.error(err)
  }
}

await fetchProfiles()
await fetchProjects()
await fetchProjectProfile()
</script>

<template>
  <div class="grid">
    <h1>Admin page</h1>

    <Card class="mb-6">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Profile list</h2>
          <ul
            v-if="getUsersWithEmails.length"
            class="mr-4"
          >
            <li
              v-for="{ id, username, user_type, email } in getUsersWithEmails"
              :key="id"
            >
              [{{ user_type || 'annonymous' }}] {{ email }} |
              <strong>{{ username || 'N/A' }}</strong> ID:
              <span class="underline">{{ id }}</span>
            </li>
          </ul>
          <p
            v-else
            class="ml-4"
          >
            Profile list is empty.
          </p>
        </section>
      </template>
    </Card>

    <Card class="mb-6">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Project list</h2>
          <ul
            v-if="projects.length"
            class="mr-4"
          >
            <li
              v-for="{ id, name } in projects"
              :key="id"
            >
              Name: <span class="underline">{{ name }}</span> ID:
              <span class="underline">{{ id }}</span>
            </li>
          </ul>
          <p
            v-else
            class="ml-4"
          >
            Project list is empty.
          </p>
        </section>
      </template>
    </Card>

    <Card class="mb-6">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Profile per Project list</h2>
          <ul
            v-if="getProfileProject.length"
            class="mr-4"
          >
            <li
              v-for="{ id, email, name } in getProfileProject"
              :key="id"
            >
              <strong>{{ email }}</strong> on project
              <span class="mr-2 underline">{{ name }}</span>

              <button
                type="button"
                @click="removeProfileFromProject(id)"
              >
                Remove permission
              </button>
            </li>
          </ul>
          <p
            v-else
            class="ml-4"
          >
            Profile per Project list is empty.
          </p>
        </section>
      </template>
    </Card>

    <EditUserTypeForm
      :users="getUsersWithEmails"
      @after-submit="fetchProfiles"
    />

    <CreateProjectForm @after-submit="fetchProjects" />

    <AddProfileToProjectForm
      :profiles="getUsersWithEmails"
      :projects="projects"
      @after-submit="fetchProjects"
    />
  </div>
</template>
