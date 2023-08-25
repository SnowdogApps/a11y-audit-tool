const debounce = (
  fn: (...args: any[]) => void,
  delay = 0,
  immediate = false
) => {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    if (immediate && !timeout) {
      fn(...args)
    }
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const useDebouncedRef = <T>(
  initialValue: T,
  delay: number,
  immediate?: boolean
): Ref<T> => {
  const state = ref(initialValue)
  const debouncedRef = customRef<T>((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce(
      (value) => {
        state.value = value
        trigger()
      },
      delay,
      immediate
    ),
  }))

  return debouncedRef
}

export default useDebouncedRef
