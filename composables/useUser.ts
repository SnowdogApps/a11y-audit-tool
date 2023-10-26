export function useUser() {
  const user = useSupabaseUser()

  const isAdmin = computed(
    () => user.value?.app_metadata?.claims_admin ?? false
  )

  const isAuditor = computed(
    () => !isAdmin.value && user.value?.app_metadata?.user_role === 'auditor'
  )

  const isViewer = computed(
    () => !isAdmin.value && user.value?.app_metadata?.user_role === 'viewer'
  )

  return {
    user,
    isAdmin,
    isAuditor,
    isViewer,
  }
}
