<script setup lang="ts">
// @note: this page is just a draft of concept
// @todo: tweak the UI and logic later on

import { getFormData } from 'utils/form'

interface AdminFormField {
  [key: string]: string
}

definePageMeta({
  middleware: [
    'auth',
    defineNuxtRouteMiddleware(async () => {
      const { data } = await useSupabaseClient().rpc('is_claims_admin')

      if (!data) {
        abortNavigation({
          message: 'You are not allowed to be here. Go away!',
        })
      }
    }),
  ],
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isLoading = ref(false)
const profiles = ref<any>([])
const authData = ref<any>([])
const projects = ref<any>([])
const profileProject = ref<any>([])

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
      email: user.email,
      name: projectData.name,
    }
  })
)

async function fetchProfiles() {
  const { data: authUsers } = await useFetch('/api/users')
  const { data } = await supabase.from('profiles').select('*')

  authData.value = authUsers.value.users
  profiles.value = data
}

async function fetchProjects() {
  const { data } = await supabase.from('projects').select('*')
  projects.value = data
}

async function fetchProjectProfile() {
  const { data } = await supabase.from('profile_project').select('*')
  profileProject.value = data
}

async function setClaim(
  uid: string,
  claim: string,
  value: object | string | number
) {
  const { data, error } = await supabase.rpc('set_claim', { uid, claim, value })
  return { data, error }
}

async function updateUserType(event: Event) {
  try {
    isLoading.value = true

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { id, user_type: userRole } = getFormData<AdminFormField>(
        event.target
      )

      const { error } = await setClaim(id, 'user_role', userRole)

      if (error) {
        throw error
      }

      fetchProfiles()
    }
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

async function createProject(event: Event) {
  try {
    const user = useSupabaseUser()

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { name, description } = getFormData<AdminFormField>(event.target)
      const { error } = await supabase
        .from('projects')
        .insert({ name, description })

      if (error) {
        throw error
      }

      fetchProjects()
    }
  } catch (err) {
    console.error(err)
  }
}

async function addProfileToProject(event: Event) {
  try {
    const user = useSupabaseUser()

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { profile_id, project_id } = getFormData<AdminFormField>(
        event.target
      )
      const { error } = await supabase
        .from('profile_project')
        .insert({ profile_id, project_id })

      if (error) {
        throw error
      }

      fetchProjectProfile()
    }
  } catch (err) {
    console.error(err)
  }
}

async function removeProfileFromProject(id: string) {
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
  <h1>Admin page</h1>
  <div class="flex">
    <div class="flex-1">
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
    </div>
    <div class="flex-1">
      <form
        class="mb-4"
        @submit.prevent="updateUserType"
      >
        <legend class="mb-4 font-bold underline">Update user type</legend>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="id"
          >
            User id
          </label>
          <select
            id="id"
            name="id"
            class="mb-2"
            required
          >
            <option />
            <option
              v-for="{ id, email, user_type } in getUsersWithEmails"
              :key="id"
              :value="id"
            >
              {{ email }} [{{ user_type }}]
            </option>
          </select>
        </div>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="user_type"
          >
            User type
          </label>
          <select
            id="user_type"
            name="user_type"
            class="mb-2"
            required
          >
            <option />
            <option value="auditor">auditor</option>
            <option value="viewer">viewer</option>
          </select>
        </div>

        <input
          type="submit"
          class="my-4"
          :value="isLoading ? 'Loading ...' : 'Update'"
          :disabled="isLoading"
        />
      </form>
      <form @submit.prevent="createProject">
        <legend class="mb-4 font-bold underline">Create project</legend>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="name"
          >
            Project name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            class="mb-2"
            required
          />
        </div>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="description"
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            class="mb-2"
            required
          />
        </div>

        <input
          type="submit"
          class="my-4"
          :value="isLoading ? 'Loading ...' : 'Update'"
          :disabled="isLoading"
        />
      </form>
      <form @submit.prevent="addProfileToProject">
        <legend class="mb-4 font-bold underline">
          Add profile to projects
        </legend>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="profile_id"
          >
            User id
          </label>
          <select
            id="profile_id"
            name="profile_id"
            class="mb-2"
            required
          >
            <option />
            <option
              v-for="{ id, email, user_type } in getUsersWithEmails"
              :key="id"
              :value="id"
            >
              {{ email }} [{{ user_type }}]
            </option>
          </select>
        </div>

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="project_id"
          >
            Project
          </label>
          <select
            id="project_id"
            name="project_id"
            class="mb-2"
            required
          >
            <option />
            <option
              v-for="{ id, name } in projects"
              :key="id"
              :value="id"
            >
              {{ name }} [{{ id }}]
            </option>
          </select>
        </div>

        <input
          type="submit"
          class="my-4"
          :value="isLoading ? 'Loading ...' : 'Update'"
          :disabled="isLoading"
        />
      </form>
    </div>
  </div>
</template>
