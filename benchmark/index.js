const { shapify } = require('../index')
const Benchmark = require('benchmark')

const {
  smallObject,
  mediumObject,
  largeObject,
  veryLargeObject,
  fewPropertiesArray,
  somePropertiesArray,
  manyPropertiesArray,
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
]

const benchJSON = {
  name: 'array:medium',
  options: {
    async: false,
    defer: false,
    delay: 0.005,
    initCount: 1,
    maxTime: 5,
    minSamples: 5,
    minTime: 0.05,
  },
  async: false,
  defer: false,
  delay: 0.005,
  initCount: 1,
  maxTime: 5,
  minSamples: 5,
  minTime: 0.05,
  id: 2,
  stats: {
    moe: 2.1466019222506573e-8,
    rme: 3.771774552340671,
    sem: 1.0952050623727844e-8,
    deviation: 1.0215392757612738e-7,
    mean: 5.69122542310629e-7,
    sample: [
      5.739400489351663e-7,
      7.995038588397611e-7,
      5.217251130985887e-7,
      5.259276895209144e-7,
      5.457846925815653e-7,
      5.214347581669408e-7,
      5.220005295015418e-7,
      5.385889095382955e-7,
      5.259977470228516e-7,
      6.414295399566017e-7,
      5.387884070309499e-7,
      5.333468754217843e-7,
      5.659627999210939e-7,
      0.0000011896854864665636,
      7.997971905271136e-7,
      5.276247868987962e-7,
      5.2552033889549e-7,
      6.798723149248334e-7,
      8.203159683835305e-7,
      7.255954021800899e-7,
      6.504313581650049e-7,
      5.186009402283412e-7,
      5.32064214496048e-7,
      8.246693392571163e-7,
      5.392829880663326e-7,
      5.19679444128739e-7,
      6.541412512269463e-7,
      5.427037144185566e-7,
      8.035991114325567e-7,
      5.247744381877357e-7,
      5.341610580151883e-7,
      5.225308260577568e-7,
      5.20444211396394e-7,
      5.212294983726817e-7,
      5.324677997623598e-7,
      5.442843105853179e-7,
      5.435204215529266e-7,
      5.230593273751098e-7,
      5.261317456217389e-7,
      5.862428372165108e-7,
      5.252943431316837e-7,
      5.214177093557886e-7,
      5.357485457457251e-7,
      5.177551790050111e-7,
      5.243409205971999e-7,
      5.561063387921683e-7,
      5.236225344836493e-7,
      5.390266983520174e-7,
      5.197788293640544e-7,
      5.185167226326394e-7,
      5.168020354393759e-7,
      5.190450896316578e-7,
      5.61275011623702e-7,
      5.236747739835718e-7,
      5.189535878493568e-7,
      5.720678617554373e-7,
      5.386683473678773e-7,
      5.245430180296534e-7,
      5.416452136178126e-7,
      5.190207366844035e-7,
      5.205431110192695e-7,
      5.307604897453118e-7,
      5.974594513612646e-7,
      7.866224621583923e-7,
      6.275590225758124e-7,
      5.204613524823062e-7,
      5.215460246939092e-7,
      5.317019579480292e-7,
      5.20400919563982e-7,
      5.599161646949424e-7,
      5.203229012760242e-7,
      5.230062613008215e-7,
      5.48373415301958e-7,
      5.457503371179758e-7,
      5.837370994472294e-7,
      5.309410995707535e-7,
      5.254158337365024e-7,
      5.184162763646845e-7,
      5.223242302901787e-7,
      5.510782010767188e-7,
      5.165450708719775e-7,
      5.217552986710861e-7,
      5.171946328759509e-7,
      5.295745725549939e-7,
      5.232433631506892e-7,
      5.712477997261881e-7,
      5.435990406291497e-7,
    ],
    variance: 1.043542491922868e-14,
  },
  times: {
    cycle: 0.055288547617850674,
    elapsed: 5.584,
    period: 5.69122542310629e-7,
    timeStamp: 1553853619865,
  },
  running: false,
  count: 97147,
  cycles: 4,
  hz: 1757090.829577783,
}

let loadedBench = Object.create(Benchmark.prototype)
loadedBench = Object.assign(loadedBench, benchJSON)

// console.log('loaded Bench', loadedBench.toString())

const variation = (a, b) => ((a - b) / b) * 100

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
