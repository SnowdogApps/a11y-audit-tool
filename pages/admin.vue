<script setup lang="ts">
import { getFormData } from 'utils/form'

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
const isLoading = ref(false)
const profiles = ref<any>([])

async function fetchProfiles() {
  const { data } = await supabase
    .from('profiles')
    .select('id, username, user_type')

  profiles.value = data
}
async function updateProfile(event: Event) {
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id && event.target instanceof HTMLFormElement) {
      const { id, user_type } = getFormData<{ id: string; user_type: string }>(
        event.target
      )
      const { error } = await supabase.from('profiles').upsert(
        {
          id,
          user_type,
          updated_at: new Date(),
        },
        {
          returning: 'minimal',
        }
      )

      fetchProfiles()

      if (error) {
        throw error
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

await fetchProfiles()
</script>

<template>
  <h1>Admin page</h1>
  <ul>
    <li
      v-for="{ id, username, user_type } in profiles"
      :key="id"
    >
      <strong>{{ username || 'N/A' }}</strong> -- {{ id }} [{{
        user_type || 'annonymous'
      }}]
    </li>
  </ul>
  <form
    class="w-full"
    @submit.prevent="updateProfile"
  >
    <div>
      <label for="id">User id</label>
      <input
        id="id"
        name="id"
        type="text"
      />
    </div>

    <div>
      <label for="user_type">User type</label>
      <input
        id="user_type"
        name="user_type"
        type="text"
      />
    </div>

    <div>
      <input
        type="submit"
        :value="isLoading ? 'Loading ...' : 'Update'"
        :disabled="isLoading"
      />
    </div>
  </form>
</template>
