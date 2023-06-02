<script setup lang="ts">
import { getFormData } from 'utils/form'

interface AdminFormField {
  [key: string]: string
}

definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const isLoading = ref(false)
const audits = ref<any>([])
const projects = ref<any>([])

const { data: claims } = await supabase.rpc('get_my_claims', {})
const isAuditor = claims.user_role === 'auditor'

if (user.value) {
  const { data: projectsData } = await supabase.from('projects').select('*')
  projects.value = projectsData || []

  await fetchAudits()
}

async function fetchAudits() {
  const { data } = await supabase.from('audits').select('*')
  audits.value = data || []
}

async function addAudit(event: Event) {
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { project_id, status } = getFormData<AdminFormField>(event.target)
      const { error } = await supabase.from('audits').insert({
        project_id,
        profile_id: user?.value.id,
        status,
        issues: { foo: 'bar' },
      })

      if (error) {
        throw error
      }

      await fetchAudits()
    }
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

async function updateAudit(event: Event) {
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { id } = getFormData<AdminFormField>(event.target)
      const { error } = await supabase
        .from('audits')
        .update({
          issues: { foo: `bar_${new Date().getTime()}` },
          updated_at: new Date(),
        })
        .eq('id', id)

      if (error) {
        throw error
      }

      await fetchAudits()
    }
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <h1>Audits list</h1>
  <div class="flex">
    <div class="flex-1">
      <ul v-if="audits.length">
        <li
          v-for="{ id, profile_id, created_at, issues, status } in audits"
          :key="id"
        >
          [{{ id }} / {{ status }}] Results: {{ issues }} -- ({{
            new Date(created_at).toLocaleDateString('pl-PL')
          }})

          <strong
            v-if="profile_id === user.id"
            class="underline"
          >
            is yours
          </strong>
        </li>
      </ul>
      <p v-else>Your audit list is empty</p>
    </div>
    <div
      v-if="isAuditor"
      class="flex flex-1 flex-col"
    >
      <form @submit.prevent="addAudit">
        <legend>Add new audit</legend>
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

        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="status"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            class="mb-2"
            required
          >
            <option />
            <option value="draft">draft</option>
            <option value="completed">completed</option>
          </select>
        </div>

        <input
          type="submit"
          class="my-4"
          :value="isLoading ? 'Loading ...' : 'Update'"
          :disabled="isLoading"
        />
      </form>

      <form
        v-if="audits.length"
        @submit.prevent="updateAudit"
      >
        <legend>Update audit</legend>
        <div>
          <label
            class="mr-2 min-w-[20px]"
            for="id"
          >
            Audit
          </label>
          <select
            id="id"
            name="id"
            class="mb-2"
            required
          >
            <option />
            <option
              v-for="{ id, status } in audits"
              :key="id"
              :value="id"
            >
              ID: {{ id }} [{{ status }}]
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
