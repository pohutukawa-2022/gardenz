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
    return db.getProductsByGarden(1, testDb).then((shopData) => {
      expect(shopData).toHaveLength(1)
      expect(shopData[0].stock).toBe(5)
      expect(shopData[0].name).toBe("large veggie box")
      expect(shopData[0].description).toBe("a large box filled with fresh seasonal produce grown at your local garden")
      expect(shopData[0].price).toBe(29)
      expect(shopData[0].image).toBe("www.linktowhereeverthisimageis.com")
      expect(shopData[0].productId).toBe(4)
      return null
    })
  })
})
