const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./shop')

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

describe('productsForGarden', () => {
  it('returns the products for a certain garden', () => {
    return db.productsForGarden(1, testDb).then((shopData) => {
      expect(shopData).toHaveLength(1)
      expect(shopData[0].stock).toBe(175)
      return null
    })
  })
})
