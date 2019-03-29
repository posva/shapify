const { shapify } = require('../index')
const Benchmark = require('benchmark')

const {
  largeObject,

  fewPropertiesArray,
  somePropertiesArray,
  manyPropertiesArray,

  fewPropertiesObject,
  somePropertiesObject,
  manyPropertiesObject,
} = require('./data.js')

// console.log({ fewPropertiesArray, somePropertiesArray, manyPropertiesArray })

const benches = [
  new Benchmark('array:small', () => {
    shapify(fewPropertiesArray, largeObject)
  }),
  new Benchmark('array:medium', () => {
    shapify(somePropertiesArray, largeObject)
  }),
  new Benchmark('array:large', () => {
    shapify(manyPropertiesArray, largeObject)
  }),
  new Benchmark('object:small', () => {
    shapify(fewPropertiesObject, largeObject)
  }),
  new Benchmark('object:medium', () => {
    shapify(somePropertiesObject, largeObject)
  }),
  new Benchmark('object:large', () => {
    shapify(manyPropertiesObject, largeObject)
  }),
]

// const variation = (a, b) => ((a - b) / b) * 100

Benchmark.invoke(benches, {
  name: 'run',
  onComplete ({ currentTarget: benches }) {
    benches.forEach(bench => {
      console.log(bench.toString())
      // console.log(bench.compare(loadedBench))
      // console.log(variation(bench.hz, loadedBench.hz))
      // console.log(JSON.stringify(bench))
    })
  },
})
