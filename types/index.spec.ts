import { shapify, keepKeys } from './'

const person = {
  id: 5,
  name: 'Eduardo',
  2: 'foo',
}

const p1 = shapify(
  {
    value: 'id',
    text: 'name',
    4: 'name',
    other: 2,
  },
  person
)

p1.text.toUpperCase()
p1.value--
p1.other.toUpperCase()
p1[4].toUpperCase()

const p2 = shapify(
  {
    value: ({ id }) => -id,
    text: ({ name }) => name.toUpperCase(),
  },
  person
)

p2.text.toLowerCase()
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
