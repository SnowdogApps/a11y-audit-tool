<script setup lang="ts">
// @note: this page is just a draft of concept

import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import type { User } from '@supabase/gotrue-js'
import type { InvalidSubmissionContext } from 'vee-validate'
import type { Database, Json } from 'types/supabase'
import { displayFirstError, getFormData } from 'utils/form'
import { connectProfileToProjectFormSchema } from 'validation/schema'

const { useFieldModel, handleSubmit, errors, submitCount, resetForm } = useForm(
  {
    validationSchema: connectProfileToProjectFormSchema,
  }
)

const [client, project] = useFieldModel(['client', 'project'])

interface AdminFormField {
  [key: string]: string
}

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
const user = useSupabaseUser()

const toast = useToast()
const isLoading = ref(false)
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

async function setClaim(uid: string, claim: string, value: Json) {
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
const { isSubmitted } = useValidation(submitCount)

const onInvalidSubmit = ({ errors }: InvalidSubmissionContext) =>
  displayFirstError(errors)

const addProfileToProject = handleSubmit(async ({ client, project }) => {
  // todo: add blocking duplication of entry in datatable
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id) {
      const { error } = await supabase.from('profile_project').insert({
        profile_id: client,
        project_id: project,
      })

      if (error) {
        throw error
      }

      await fetchProjectProfile()
      toast.add({
        severity: 'success',
        summary: 'You successfully add profile to project',
        life: 3000,
      })

      resetForm()
    }
  } catch (error) {
    console.warn({ error })
    toast.add({
      severity: 'error',
      summary: `There was an error`,
      detail: `Error #${error.code} - ${error.message}`,
      life: 3000,
    })
  } finally {
    isLoading.value = false
  }
}, onInvalidSubmit)
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

    <Card class="mb-6">
      <template #content>
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
      </template>
    </Card>

    <Card class="mb-6">
      <template #content>
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
      </template>
    </Card>

    <Card>
      <template #content>
        <form @submit="addProfileToProject">
          <legend class="mb-4 w-full font-bold">Add profile to projects</legend>

          <div class="mb-6 grid gap-3 md:grid-cols-2">
            <div>
              <label for="profile_id"> User </label>
              <Dropdown
                id="client"
                v-model="client"
                :options="getUsersWithEmails"
                :option-label="
                  ({ full_name, email, user_type }) =>
                    `${full_name ?? email} [${
                      user_type ?? 'user type not set'
                    }]`
                "
                option-value="id"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="claims-client-field"
                name="client"
              />
              <small
                v-if="errors.client && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.client }}
              </small>
            </div>

            <div>
              <label
                class="mr-2"
                for="project"
              >
                Project
              </label>
              <Dropdown
                id="project"
                v-model="project"
                :options="projects"
                :option-label="({ id, name }) => `${name} [${id}]`"
                option-value="id"
                placeholder="Select"
                class="md:w-14rem w-full"
                data-testid="claims-project-field"
                name="project"
              />
              <small
                v-if="errors.project && isSubmitted"
                class="p-error mt-1"
              >
                {{ errors.project }}
              </small>
            </div>
          </div>

          <Button
            :label="isLoading ? 'Loading ...' : 'Update'"
            type="submit"
            class="p-button-lg w-full"
            data-testid="audit-submit-button"
            :loading="isLoading"
            :disabled="isLoading"
          />
        </form>
      </template>
    </Card>
  </div>
</template>
