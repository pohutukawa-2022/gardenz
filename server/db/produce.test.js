const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./produce')

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getAllProduce', () => {
  it('gets all produce', () => {
    return db.getAllProduce(testDb).then((produce) => {
      expect(produce).toHaveLength(12)
      expect(produce[0].name).toMatch('Strawberry')
      expect(produce[1].name).toMatch('Celery')
      return null
    })
  })
})

describe('addProduce', () => {
  it('adds a new produce to the db', () => {
    const newProduce = {
      name: 'Pineapple',
      produceTypeId: 2,
    }

    return db
      .addProduce(newProduce, testDb)
      .then((id) => db.findProduceById(id, testDb))
      .then((produce) => {
        expect(produce.name).toMatch('Pineapple')
        expect(produce.produceTypeId).toBe(2)
        return null
      })
  })
})

describe('findProduceById', () => {
  it('returns the correct produce', () => {
    return db.findProduceById(4, testDb).then((produce) => {
      expect(produce.name).toMatch('Lemon')
      expect(produce.produceTypeId).toBe(2)

      return null
    })
  })
})

// describe('addGardenProduce', () => {
//   it.only('adds a new garden produce to the db', () => {
//     const produceId = 1
//     const gardens = [1, 2]

//     return db
//       .addGardenProduce(produceId, gardens, testDb)
//       .then((ids) => {
//         console.log(ids)
//         return db.findGardenProduceById(ids, testDb)
//       })
//       .then((newGardenProduce) => {
//         expect(newGardenProduce.produceId).toBe(1)
//         expect(newGardenProduce.gardenId).toBe(2)
//         return null
//       })
//   })
// })

// describe('listGardenProduce', () => {
//   it('gets all produce within a garden', () => {
//     return db.listGardenProduce(testDb).then((produce) => {
//       console.log(produce)
//       expect(produce).toHaveLength(16)
//       expect(produce[0].produceId).toBe(1)
//       expect(produce[0].gardenId).toBe(1)
//       expect(produce[0].status).toBeTruthy()
//       return null
//     })
//   })
// })
