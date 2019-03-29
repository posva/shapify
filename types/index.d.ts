type RecordKey = string | number | symbol

declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  // is this really necessary?
  M extends Record<RecordKey, K | ((obj: T) => any)>
>(
  mapper: M,
  obj: T
): {
  [P in keyof M]: (M[P] extends K
    ? T[M[P]] // I don't understand why I have to create a nested ternary
    : (M[P] extends ((obj: T) => any) ? ReturnType<M[P]> : never))
}
declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  Keys extends Array<K>
>(keys: Keys, obj: T): { [P in K]: T[P] }

// TODO: make it work
declare function shaper<
  M extends Record<RecordKey, RecordKey | ((obj: any) => any)>
>(
  mapper: M
): {
  <T extends Record<RecordKey, any>, K extends keyof T>(obj: T): {
    [P in keyof M]: (M[P] extends K
      ? T[M[P]] // I don't understand why I have to create a nested ternary
      : (M[P] extends ((obj: T) => any) ? ReturnType<M[P]> : unknown))
  }
}
// declare function shaper(mapper: Record<RecordKey, RecordKey | (obj: any) => any>) : any

declare function keepKeys<T extends Record<RecordKey, any>, K extends keyof T>(
  obj: T
): { [P in K]: P }

export { shapify, keepKeys, shaper }
