import { shapify, keepKeys } from './'

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

p4[2]
p4.id
p4.name
