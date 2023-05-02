import type { Ref } from 'vue'

export default function (submitCount: Ref<number>) {
  const isSubmitted = computed<boolean>(() => submitCount.value > 0)

  return {
    isSubmitted,
  }
}
