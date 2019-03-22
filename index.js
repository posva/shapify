module.exports = (mapper, obj) => {
  const res = {}
  for (const newKey in mapper) {
    const keyOrFn = mapper[newKey]
    res[newKey] = typeof keyOrFn === 'function' ? keyOrFn(obj) : obj[keyOrFn]
  }

  const symbols = Object.getOwnPropertySymbols(mapper)
  for (const symbol of symbols) {
    const keyOrFn = mapper[symbol]
    res[symbol] = typeof keyOrFn === 'function' ? keyOrFn(obj) : obj[keyOrFn]
  }

  return res
}
