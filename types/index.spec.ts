import shapify from './'

const person = {
  id: 5,
  name: 'Eduardo',
}

const option = shapify(
  {
    value: 'id',
    text: 'name',
  },
  person
)

option.text.toUpperCase()
