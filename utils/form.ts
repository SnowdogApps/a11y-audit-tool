export function getFormData<T>(form: HTMLFormElement) {
  return Array.from(new FormData(form)).reduce(
    (obj, [k, v]) => ({ ...obj, [k]: v }),
    {}
  ) as T
}
