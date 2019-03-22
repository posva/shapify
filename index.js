exports.shapify = (mapper, obj) => {
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

exports.keepKeys = obj => {
  const res = {}
  for (const key in obj) {
    res[key] = key
  }

  const symbols = Object.getOwnPropertySymbols(obj)
  for (const symbol of symbols) {
    res[symbol] = symbol
  }

  return res
}
