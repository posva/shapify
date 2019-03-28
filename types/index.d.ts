type RecordKey = string | number | symbol

declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  // is this really necessary?
  ValueMapper extends (obj: T) => any,
  M extends Record<RecordKey, K | ValueMapper>
>(
  mapper: M,
  obj: T
): {
  [P in keyof M]: (M[P] extends K
    ? T[M[P]] // I don't understand why I have to create a nested ternary
    : (M[P] extends ValueMapper ? ReturnType<M[P]> : never))
}
declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  Keys extends Array<K>
>(keys: Keys, obj: T): { [P in K]: T[P] }

declare function keepKeys<T extends Record<RecordKey, any>, K extends keyof T>(
  obj: T
): { [P in K]: P }

export { shapify, keepKeys }
