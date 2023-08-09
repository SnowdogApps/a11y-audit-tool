export default defineNuxtPlugin(() => {
  return {
    provide: {
      toCamelCase: (str: string): string =>
        str
          .trim()
          .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')),
    },
  }
})
