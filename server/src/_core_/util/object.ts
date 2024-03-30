export function omit<T extends object, K extends keyof any>(obj: T, keys: K[]): Omit<T, K> {
  const rest = { ...obj }
  keys.forEach((key) => {
    delete rest[key as string]
  })
  return rest
}
