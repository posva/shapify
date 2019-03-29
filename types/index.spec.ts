import { shapify, keepKeys, shaper } from './'

const symbol = Symbol('symbol')
const s2 = Symbol('symbol2')

const person = {
  id: 5,
  name: 'Eduardo',
  2: 'foo',
  [symbol]: { nested: 'yes' },
}

const p1 = shapify(
  {
    value: 'id',
    text: 'name',
    4: 'name',
    [s2]: symbol,
    other: 2,
  },
  person
)

p1.text.toUpperCase()
p1.value--
p1.other.toUpperCase()
p1[4].toUpperCase()
p1[s2].nested = 'no'

const p2 = shapify(
  {
    value: ({ id }) => -id,
    text: ({ name }) => name.toUpperCase(),
    YESNO: ({ [symbol]: s }) => s.nested.toUpperCase(),
  },
  person
)

p2.text.toLowerCase()
p2.YESNO.toLowerCase()
p2.value--

const keys = keepKeys(person)
keys[2] = 2
keys.id = 'id'
keys.name = 'name'

const p3 = shapify(
  {
    ...keepKeys(person),
    value: 'id',
  },
  person
)

p3.name.toLowerCase()
p3.id--
p3.value--

const p4 = shapify(['id', 'name', 2, symbol], person)

p4[2].toUpperCase()
p4.id = 4
p4.name.toUpperCase()
p4[symbol].nested.toLowerCase()

// TODO: uncomment when implemented types for shaper
// TODO: add tests with functions
const shape = { n: 'id', other: 'name', 3: 2, [s2]: symbol }
const personShaper = shaper(shape)

// const p6 = personShaper(person)
// p6[3].toUpperCase()
// p6.n = 5
// p6.other.toLowerCase()
// p6[s2].nested.toLowerCase()

// const p5 = shaper(['id', 'name', 2, symbol])(person)
// p5[2]
// p5.id
// p5.name
// p5[symbol]
