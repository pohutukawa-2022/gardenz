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
