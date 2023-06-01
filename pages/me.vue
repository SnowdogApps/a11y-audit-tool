<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const username = ref('')
const fullName = ref('')
const avatarUrl = ref('')
const userType = ref('')
const isLoading = ref(true)

if (user.value) {
  const { data } = await supabase
    .from('profiles')
    .select('username, full_name, avatar_url, user_type')
    .eq('id', user.value.id)
    .single()

  if (data) {
    username.value = data.username
    fullName.value = data.full_name
    avatarUrl.value = data.avatar_url
    userType.value = data.user_type
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
          full_name: fullName.value,
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
      <label for="full_name">Full name</label>
      <input
        id="full_name"
        v-model="fullName"
        type="text"
      />
    </div>

    <div>
      <label for="avatar_url">Avatar url (soon)</label>
      <input
        id="avatar_url"
        v-model="avatarUrl"
        type="text"
        disabled
        readonly
      />
    </div>

    <div>
      <label for="user_type">User type</label>
      <input
        id="user_type"
        v-model="userType"
        type="text"
        disabled
        readonly
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
