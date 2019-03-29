# shapify [![Build Status](https://badgen.net/circleci/github/posva/shapify)](https://circleci.com/gh/posva/shapify) [![npm package](https://badgen.net/npm/v/shapify)](https://www.npmjs.com/package/shapify) [![coverage](https://badgen.net/codecov/c/github/posva/shapify)](https://codecov.io/github/posva/shapify) [![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/posva/thanks)

> Easily reshape objects with TS support

## Installation

```sh
npm install shapify
# or
yarn install shapify
```

## Usage

### Basic usage

Given an array of users:

```js
const users = [
  { fullname: 'Eduardo San Martin morote', id: 1, more: 'properties', that: 'exist', but: "you don't always need"]},
  // more users
]
```

You can transform objects

```js
import { shapify } from 'shapify'

const reshapedUser = shapify(
  {
    text: 'fullname',
    value: 'id',
  },
  users[0]
)
/**
 * only text and value are present
 * { text: 'Eduardo San Martin Morote', value: 1 }
 */
```

### Functional approach

This can be used to transform whole arrays of objects:

```js
import { shapify, shaper } from 'shapify'
// create a function with the first parameter fixed
const userShaper = shaper({ text: 'fullname', value: 'id' })
// equivalent to
const sameUserShaper = shapify.bind(null, { text: 'fullname', value: 'id' })

// generate the new array
const userChoices = users.map(userShaper)
```

**⚠️: (#3) this breaks typings (mark them as `unknown`), if you know how to make it work, please file a PR**

### Customizing the new value

If you want to customize the value instead of just using the original one, you can provide a function:

```js
const reshapedUser = shapify(
  {
    text: 'fullname',
    value: user => 'id: ' + user.id,
  },
  users[0]
)
/**
 * only text and value are present
 * { text: 'Eduardo San Martin Morote', value: 'id: 1' }
 */
```

### Keeping original keys/values

If you need to keep original keys, you can provide a key with the same value:

```js
shapify({ id: 'id' }, users[0])
```

But a more appropriate syntax is an array of keys (strings, numbers or symbols):

```js
shapify(['id', 'fullname'], users[0])
```

This is similar to [`lodash.pick(users[0], ['id', 'fullname'])`](https://lodash.com/docs#pick). However, because shapify is type safe, it cannot support paths as strings as `lodash.pick` does. Instead you need to use a function.

If you need to keep **all of the original keys**, there is a helper that you can use:

```js
import { shapify, keepKeys } from 'shapify'

// this will generate a user object with all of the original properties as well
// as text with fullname's value
shapify(
  {
    ...keepKeys(users[0]),
    text: 'fullname',
  },
  users[0]
)
```

## License

[MIT](http://opensource.org/licenses/MIT)
