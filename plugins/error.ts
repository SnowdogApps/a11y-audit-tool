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
      handleError: (error: SupabaseError | Error) => {
        if (process.client) {
          const toast = useToast()
          console.warn({ error })

          const summary =
            'code' in error
              ? `There was an error #${error.code}`
              : 'There was an error'
          const message = error.message || 'Oops, something went wrong'

          toast.add({
            severity: 'error',
            summary,
            detail: message,
            life: 3000,
          })
        } else {
          if (isSupabaseError(error)) {
            throw new SupabaseError(error)
          }

          throw new Error(error.message)
        }
      },
    },
  }
})
