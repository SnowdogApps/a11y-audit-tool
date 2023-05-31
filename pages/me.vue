<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const username = ref('')
const isLoading = ref(true)

if (user.value) {
  const { data } = await supabase
    .from('profiles')
    .select('username, full_name, avatar_url, user_type')
    .eq('id', user.value.id)
    .single()

  if (data) {
    username.value = data.username
  }

  isLoading.value = false
}

async function updateProfile() {
  try {
    isLoading.value = true
    const user = useSupabaseUser()

    if (user.value?.id) {
      const { error } = await supabase.from('profiles').upsert(
        {
          id: user.value.id,
          username: username.value,
          updated_at: new Date(),
        },
        {
          returning: 'minimal',
        }
      )

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
</script>

<template>
  <form
    v-if="user"
    class="w-full"
    @submit.prevent="updateProfile"
  >
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        :value="user.email"
        disabled
      />
    </div>

    <div>
      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
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
