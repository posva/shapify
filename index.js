exports.shapify = (mapper, obj) => {
  const mapperFunc = Array.isArray(mapper) ? arrayMapper : applyMapper
  return mapperFunc(mapper, obj)
}

const applyMapper = (mapper, obj) => {
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

const arrayMapper = (keys, obj) => {
  const mapper = keys.reduce((acc, key) => ({ ...acc, [key]: key }), {})
  return applyMapper(mapper, obj)
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
