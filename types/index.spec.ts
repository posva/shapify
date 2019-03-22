import shapify from './'

const person = {
  id: 5,
  name: 'Eduardo',
}

const p1 = shapify(
  {
    value: 'id',
    text: 'name',
  },
  person
)

p1.text.toUpperCase()
p1.value--

const p2 = shapify(
  {
    value: ({ id }) => -id,
    text: ({ name }) => name.toUpperCase(),
  },
  person
)

p2.text.toLowerCase()
p2.value--
