<script setup lang="ts">
import type { User } from '@supabase/gotrue-js'
import { useToast } from 'primevue/usetoast'
import type { Database } from 'types/supabase'
import type { Project, Profile, ProfileProjectKeys } from 'types/database'
import type {
  ProfileProject,
  ProfileWithEmail,
  RemoveFromProjectPayload,
} from 'types/user'
import { isSupabaseError, SupabaseError } from '~/plugins/error'

definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(async () => {
      const { data } = await useSupabaseClient<Database>().rpc(
        'is_claims_admin'
      )

      if (!data) {
        abortNavigation({
          message: 'Access Denied: Contact Administrator for Assistance.',
        })
      }
    }),
  ],
})

const supabase = useSupabaseClient<Database>()
const toast = useToast()

const isLoading = ref(false)
const isFetching = ref(true)
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
        email: user?.email ?? '',
        name: projectData?.name ?? '',
        userId: user?.id ?? '',
        projectId: projectData!.id,
        metadata: user?.app_metadata || {},
      }
    }
  )
)

const { data } = await useFetch<{
  users: User[]
  aud: string
  nextPage: number | null
  lastPage: number
  total: number
}>('/api/users')

authData.value = data.value?.users || []

async function fetchProfiles() {
  try {
    const { data } = await supabase.from('profiles').select('*')
    // @ts-ignore
    profiles.value = data || []
  } catch (error) {
    console.error('Error fetching profiles:', error)
  }
}

async function fetchProjects() {
  try {
    const { data } = await supabase.from('projects').select('*')
    projects.value = data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}

async function fetchProjectProfile() {
  try {
    const { data } = await supabase.from('profile_project').select('*')
    profileProject.value = data || []
  } catch (error) {
    console.error('Error fetching project profiles:', error)
  }
}

async function fetchData() {
  try {
    isFetching.value = true

    await Promise.all([fetchProfiles(), fetchProjects(), fetchProjectProfile()])

    isFetching.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
    isFetching.value = false
  }
}

async function removeProfileFromProject(payload: RemoveFromProjectPayload) {
  isLoading.value = true

  try {
    const { error } = await supabase
      .from('profile_project')
      .delete()
      .eq('profile_id', payload.userId)
      .eq('project_id', payload.projectId)

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

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div class="grid">
    <h1>Admin page</h1>

    <Spinner
      v-if="isFetching"
      class="mx-auto my-10 w-40"
    />
    <div v-else>
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
  </div>
</template>
