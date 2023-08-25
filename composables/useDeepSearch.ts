export function useDeepSearch(
  obj: Record<string, any>,
  target: string,
  depth = 0,
  maxDepth = 3,
  foundObjects: Record<string, any>[] = []
): Record<string, any>[] {
  if (depth > maxDepth) {
    return foundObjects
  }

  if (typeof obj === 'object' && obj !== null) {
    for (const value of Object.values(obj)) {
      if (
        typeof value === 'string' &&
        value.toLowerCase().includes(target.toLowerCase())
      ) {
        foundObjects.push(obj)
        break
      } else {
        useDeepSearch(value, target, depth + 1, maxDepth, foundObjects)
      }
    }
  }

  return foundObjects
}
