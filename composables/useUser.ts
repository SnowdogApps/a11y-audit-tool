export function useUser() {
  const user = useSupabaseUser()

  const isAdmin = computed(
    () => user.value?.app_metadata?.claims_admin ?? false
  )

  const isAuditor = computed(
    () => !isAdmin && user.value?.app_metadata?.user_role === 'auditor'
  )

  return {
    user,
    isAdmin,
    isAuditor,
  }
}
