export function useDeepSearch(
  obj: Record<string, any>,
  target: string,
  maxDepth = 3
): Record<string, any>[] {
  const foundObjects: Record<string, any>[] = []
  const stack: { obj: Record<string, any>; depth: number }[] = [
    { obj, depth: 0 },
  ]

  while (stack.length > 0) {
    const stackItem = stack.pop()

    if (!stackItem) {
      break
    }

    const { obj: currentObj, depth } = stackItem

    if (depth > maxDepth) {
      continue
    }

    if (typeof currentObj === 'object' && currentObj !== null) {
      for (const value of Object.values(currentObj)) {
        if (
          typeof value === 'string' &&
          value.toLowerCase().includes(target.toLowerCase())
        ) {
          foundObjects.push(currentObj)
          break
        } else if (typeof value === 'object' && value !== null) {
          stack.push({ obj: value, depth: depth + 1 })
        }
      }
    }
  }

  return foundObjects
}
