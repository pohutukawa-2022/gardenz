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

describe('getProduce', () => {
  it('returns the correct number of produce', () => {
    return db.getGardens(testDb).then((gardens) => {
      // set expect to actual length
      expect(gardens).toHaveLength(5)
      return null
    })
  })
})
