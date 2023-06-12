const displayFirstError = async <TValues>(
  errors: Partial<Record<keyof TValues, string>>
) => {
  if (Object.keys(errors).length) {
    const firstError: HTMLElement | null = document.querySelector(
      `[name="${Object.keys(errors)[0]}"]`
    )
    await nextTick(() => {
      firstError?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      firstError?.focus({ preventScroll: true })
    })
  }
}

export { displayFirstError }
