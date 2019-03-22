type RecordKey = string | number | symbol

declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  ValueMapper extends (obj: T) => any,
  M extends Record<RecordKey, K | ValueMapper>
>(
  mapper: M,
  obj: T
): {
  [P in keyof M]: (M[P] extends K
    ? T[M[P]]
    : M[P] extends ValueMapper
    ? ReturnType<M[P]>
    : never)
}

export default shapify
