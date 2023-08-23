<script setup lang="ts">
import type { User } from '@supabase/gotrue-js'
import { useToast } from 'primevue/usetoast'
import type { Database } from 'types/supabase'
import type { Project, Profile, ProfileProjectKeys } from 'types/database'
import type { ProfileProject, ProfileWithEmail } from 'types/user'
import { isSupabaseError, SupabaseError } from '~/plugins/error'

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
const toast = useToast()

const isLoading = ref(false)
const profiles = ref<Profile[]>([])
const authData = ref<User[]>([])
const projects = ref<Project[]>([])

const profileProject = ref<ProfileProjectKeys>([])

const getAuthDataById = (id: string) =>
  authData.value.find((user) => user.id === id)

const getUsersWithEmails = computed((): ProfileWithEmail[] =>
  profiles.value.map(
    (profile): ProfileWithEmail => ({
      ...profile,
      email: getAuthDataById(profile.id)?.email || '',
    })
  )
)
const getProfileProject = computed((): ProfileProject[] =>
  profileProject.value.map(
    ({ profile_id: profileId, project_id: projectId }): ProfileProject => {
      const user = getAuthDataById(profileId)
      const projectData = projects.value.find(
        (project) => project.id === projectId
      )

      return {
        email: user?.email || '',
        name: projectData?.name || '',
      }
    }
  )
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

  authData.value = authUsers.value?.users || []
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
  isLoading.value = true

  try {
    const { error } = await supabase
      .from('profile_project')
      .delete()
      .eq('id', id)

    if (error) {
      if (isSupabaseError(error)) {
        throw new SupabaseError(error)
      }

      throw new Error(error?.message || '')
    }

    fetchProjectProfile()

    toast.add({
      severity: 'success',
      summary: 'Permission deleted',
      life: 3000,
    })
  } catch (error) {
    const { $handleError } = useNuxtApp()

    $handleError(error as Error | SupabaseError)
  } finally {
    isLoading.value = false
  }
}

await fetchProfiles()
await fetchProjects()
await fetchProjectProfile()
</script>

<template>
  <div class="grid">
    <h1>Admin page</h1>

    <Card class="mb-6 overflow-auto">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Profile list</h2>
          <ProfileTable
            v-if="getUsersWithEmails.length"
            :profiles="getUsersWithEmails"
          />
          <p
            v-else
            class="ml-4"
          >
            Profile list is empty.
          </p>
        </section>
      </template>
    </Card>

    <Card class="mb-6 overflow-auto">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Project list</h2>
          <ProjectTable
            v-if="projects.length"
            :projects="projects"
          />
          <p
            v-else
            class="ml-4"
          >
            Project list is empty.
          </p>
        </section>
      </template>
    </Card>

    <Card class="mb-6 overflow-auto">
      <template #content>
        <section class="mr-4">
          <h2 class="underline">Profile per Project list</h2>
          <ClaimTable
            v-if="getProfileProject.length"
            :is-loading="isLoading"
            :profiles-to-projects="getProfileProject"
            @remove="removeProfileFromProject"
          />
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
      @after-submit="fetchProjectProfile()"
    />
  </div>
</template>
