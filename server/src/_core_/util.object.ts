export function omit<T extends object, K extends keyof any>(obj: T, keys: K[]): Omit<T, K> {
  const o = { ...obj }
  keys.forEach((key) => delete o[key as string])
  return o
}
