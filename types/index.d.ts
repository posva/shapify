type RecordKey = string | number | symbol

declare function shapify<
  T extends Record<RecordKey, any>,
  K extends keyof T,
  M extends Record<RecordKey, K>
>(mapper: M, obj: T): { [P in keyof M]: T[M[P]] }

export default shapify
