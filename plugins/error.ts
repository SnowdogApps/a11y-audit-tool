import type { PostgrestError } from '@supabase/postgrest-js'
import { useToast } from 'primevue/usetoast'

export class SupabaseError extends Error {
  details: string
  hint: string
  code: string

  constructor(error: PostgrestError) {
    super(error.message)
    Object.setPrototypeOf(this, SupabaseError.prototype)
    this.code = error.code
    this.details = error.details
    this.hint = error.hint
  }
}

export const isSupabaseError = (error: unknown): error is SupabaseError => {
  return error instanceof SupabaseError
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      handleError: (error: Error) => {
        const toast = useToast()

        toast.add({
          severity: 'error',
          summary: error.message || 'Oops, something went wrong',
          life: 3000,
        })
      },
      handleSupabaseError: (error: SupabaseError) => {
        const toast = useToast()

        toast.add({
          severity: 'error',
          summary: 'There was an error',
          detail: `Error #${error.code} - ${error.message}`,
          life: 3000,
        })
      },
    },
  }
})
