/* eslint-disable @typescript-eslint/no-explicit-any */
export function toArray<T extends any | any[]>(
  value: T,
): T extends any[] ? T : T[] {
  if (value === undefined) return <any>[]
  return Array.isArray(value) ? value : ([value] as any)
}

export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function'
}
