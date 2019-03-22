const { shapify, keepKeys } = require('./index')

describe('shapify', () => {
  it('renames properties', () => {
    expect(shapify({ a: 'b' }, { b: 'foo' })).toEqual({ a: 'foo' })
  })

  it('renames number properties', () => {
    expect(shapify({ a: 3 }, { 3: 'foo' })).toEqual({ a: 'foo' })
  })

  it('creates number properties', () => {
    expect(shapify({ 3: 'a' }, { a: 'foo' })).toEqual({ 3: 'foo' })
  })

  it('skips non used properties by default', () => {
    expect(shapify({ a: 'b' }, { b: 'foo', other: true })).toEqual({ a: 'foo' })
  })

  it('invokes functions to map values', () => {
    expect(shapify({ a: ({ n }) => n * 2 }, { n: 2 })).toEqual({ a: 4 })
  })

  it('can read Symbols from object', () => {
    const s = Symbol('s')
    expect(shapify({ a: s }, { [s]: true })).toEqual({ a: true })
  })

  it('can create Symbol keys', () => {
    const s = Symbol('s')
    expect(shapify({ [s]: 'a' }, { a: true })).toEqual({ [s]: true })
  })

  it('maps function from symbols too', () => {
    const s = Symbol('s')
    expect(shapify({ [s]: ({ n }) => n * 2 }, { n: 3 })).toEqual({ [s]: 6 })
  })
})

describe('keepKeys', () => {
  it('generates an object with keys as values', () => {
    const s = Symbol('s')
    expect(keepKeys({ [s]: true, a: 'foo', b: 'b' })).toEqual({
      [s]: s,
      a: 'a',
      b: 'b',
    })
  })

  it('can be used with shapify to keep keys', () => {
    const o = { b: 'foo', other: true }
    expect(shapify({ ...keepKeys(o), a: 'b' }, o)).toEqual({
      a: 'foo',
      b: 'foo',
      other: true,
    })
  })
})
