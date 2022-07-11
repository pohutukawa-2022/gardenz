const request = require('supertest')

const server = require('../server')
const db = require('../db/gardens')
const dbUsers = require('../db/users')
const auth0 = require('../routes/auth')
const log = require('../logger')

jest.mock('../logger')
jest.mock('../db/gardens')
jest.mock('../db/users')
jest.mock('../routes/auth')

describe('GET /api/v1/gardens/:id', () => {
  function makeMockGarden() {
    return {
      fruit: 'banana',
      events: [
        {
          id: 1,
          volunteersNeeded: 8,
          title: 'Weeding Worker Bee',
          date: 'Wed, 27 Sep 2020 20:00:00 GMT',
          description: "It's time to get these weeds under control.",
          volunteers: [
            {
              firstName: 'Sam',
              userId: 3,
            },
            {
              firstName: 'Steve',
              userId: 4,
            },
          ],
        },
        {
          id: 2,
          volunteersNeeded: 19,
          title: 'Rocking the Garden',
          date: 'Wed, 26 Sep 2020 20:00:00 GMT',
          description: "It's time to rock this garden!",
          volunteers: [
            {
              firstName: 'Sam',
              userId: 3,
            },
            {
              firstName: 'Steve',
              userId: 4,
            },
          ],
        },
      ],
    }
  }

  it('responds with correct data structure for non-admin user', async () => {
    db.getGardenById.mockImplementation(() => {
      return Promise.resolve(makeMockGarden())
    })

    const response = await request(server).get('/api/v1/gardens/2')

    const garden = response.body

    expect(garden.fruit).toBe('banana')
    expect(garden.events[0].totalVolunteers).toBe(2)
    expect(garden.events[1].totalVolunteers).toBe(2)
    expect(garden.events[0].isVolunteer).toBe(false)
    expect(garden.events[1].isVolunteer).toBe(false)
    expect(garden.events[0].volunteers).toBeUndefined()
    expect(garden.events[1].volunteers).toBeUndefined()
  })

  it('responds with correct data structure for admin user', async () => {
    dbUsers.getUserById.mockImplementation(() => {
      return Promise.resolve({})
    })

    db.getGardenById.mockImplementation(() => {
      return Promise.resolve(makeMockGarden())
    })

    auth0.userHasAdminRole.mockImplementation(() => {
      return Promise.resolve(true)
    })

    const response = await request(server).get('/api/v1/gardens/2')
    const garden = response.body

    expect(garden.fruit).toBe('banana')
    expect(garden.events[0].totalVolunteers).toBe(2)
    expect(garden.events[1].totalVolunteers).toBe(2)
    expect(garden.events[0].isVolunteer).toBe(false)
    expect(garden.events[1].isVolunteer).toBe(false)
    expect(garden.events[0].volunteers).toHaveLength(2)
    expect(garden.events[1].volunteers).toHaveLength(2)
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getGardenById.mockImplementation(() =>
      Promise.reject(new Error('mock getGardenById error'))
    )
    return request(server)
      .get('/api/v1/gardens/999')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getGardenById error')
        expect(res.body.error.title).toBe('Unable to retrieve garden')
        return null
      })
  })
})

describe('GET /api/v1/gardens', () => {
  it('responds with gardens on res body', () => {
    db.getGardens.mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          name: 'Kahu Gardens',
          address: '12 Hukanui Crescent',
          description: 'Kelmarna Gardens is a city farm and ...',
          lat: -36.86011508905973,
          lon: 174.7330772002716,
          url: 'http://www.kelmarnagardens.nz',
        },
        {
          id: 2,
          name: 'GARDENS ROCK!',
          address: '105 GARDENS ROCK ST',
          description: 'GARDENS ARE THE BEST',
          lat: -36.86011508905973,
          lon: 174.7330772002716,
          url: 'http://www.GARDENSROCK.nz',
        },
      ])
    )
    return request(server)
      .get('/api/v1/gardens')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.gardens).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getGardens.mockImplementation(() =>
      Promise.reject(new Error('mock getGardens error'))
    )
    return request(server)
      .get('/api/v1/gardens')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getGardens error')
        expect(res.body.error.title).toBe('Unable to retrieve gardens')
        return null
      })
  })
})
