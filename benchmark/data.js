function buildObject (n) {
  let prefix = ''
  let current = 'a'
  let i
  const res = {}

  for (i = 0; i < n; ++i) {
    res[prefix + current] = current
    current = String.fromCharCode(current.charCodeAt(0) + 1)

    // { is the char right after z
    if (current === '{') {
      current = 'a' // go back to a
      const end = prefix.length - 1
      const c = prefix[end]
      // if prefix is empty or z, add new letter
      if (!c || c === 'z') prefix += 'a'
      else {
        prefix =
          prefix.slice(0, end - 1) +
          String.fromCharCode(prefix.charCodeAt(end) + 1)
      }
    }
  }

  return res
}

function buildArray (n) {
  return Object.keys(buildObject(n))
}

exports.smallObject = buildObject(3)
exports.mediumObject = buildObject(15)
exports.largeObject = buildObject(200)
exports.veryLargeObject = buildObject(1000)

exports.fewPropertiesArray = buildArray(2)
exports.somePropertiesArray = buildArray(5)
exports.manyPropertiesArray = buildArray(15)

exports.fewPropertiesObject = buildObject(2)
exports.somePropertiesObject = buildObject(5)
exports.manyPropertiesObject = buildObject(15)
