const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./gardens')

// Prevent Jest from timing out (5s often isn't enough)
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

describe('getGardens', () => {
  it('returns the correct number of gardens', () => {
    return db.getGardens(testDb).then((gardens) => {
      expect(gardens).toHaveLength(5)
      return null
    })
  })
})

describe('getGardenById', () => {
  it('returns the chosen garden, with events mapped correctly', () => {
    return db.getGardenById(2, testDb).then((garden) => {
      expect(garden.id).toBe(2)
      expect(garden.name).toBe('Kingsland Community Orchard')
      expect(garden.phone).toBe('09 123 4567')
      expect(garden.email).toBe('kingslandurbangarden@gmail.com')
      expect(garden.events).toHaveLength(7)
      const event = garden.events[1]
      expect(event.id).toBe(2)
      expect(event.volunteersNeeded).toBe(24)
      expect(event.volunteers).toHaveLength(3)
      return null
    })
  })
})
it('returns the chosen garden, with empty events array when no events', () => {
  return db.getGardenById(3, testDb).then((garden) => {
    expect(garden.id).toBe(3)
    expect(garden.name).toBe('Devonport Community Garden')
    expect(garden.events).toHaveLength(0)
    expect(garden.phone).toBe('09 123 4567')
    expect(garden.email).toBe('hello@devenportcommunitygarden.com')
    expect(garden.imageHeaderUrl).toBe(
      'https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/251442854_2530316323778513_3929618774131301683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=VyN7uvqRaMYAX-PYpcm&_nc_ht=scontent.fakl2-1.fna&oh=00_AT8KF20wE75XR7WfBY8c9DdA2L3h225osPaV_E6pfMCKog&oe=6327AFC7'
    )
    return null
  })
})