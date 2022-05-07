const request = require('supertest')

const server = require('../server')
const db = require('../db/produce')
const log = require('../logger')
const { getAdminToken } = require('./mockToken')

jest.mock('../logger')
jest.mock('../db/produce')
jest.mock('../db/users')

const testAuthAdminHeader = {
  Authorization: `Bearer ${getAdminToken()}`,
}

describe('POST /api/v1/gardenproduce', () => {
  it('responds with status 401 when no token is passed', () => {
    return request(server)
      .post('/api/v1/gardenproduce')
      .then((res) => {
        expect(res.status).toBe(401)
        return null
      })
  })

  it('responds with the correct garden produce', () => {
    db.addGardenProduce.mockImplementation((newGardenProduce) => {
      expect(newGardenProduce.produceId).toBe(1)
      expect(newGardenProduce.gardens).toContain(1)
      expect(newGardenProduce.gardens).toContain(2)
      return Promise.resolve()
    })

    return request(server)
      .post('/api/v1/gardenproduce')
      .set(testAuthAdminHeader)
      .send({ produceId: 1, gardens: [1, 2] })
      .then((res) => {
        expect(res.status).toBe(201)
        return null
      })
  })

  it('responds with status 500 and an error during a DB error', () => {
    db.addGardenProduce.mockImplementation(() =>
      Promise.reject(new Error('mock addGardenProduce error'))
    )
    return request(server)
      .post('/api/v1/gardenproduce')
      .set(testAuthAdminHeader)
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock addGardenProduce error')
        expect(res.body.error.title).toBe('Unable to add garden produce')
        return null
      })
  })
})

describe('GET /api/v1/gardenproduce/:id', () => {
  it('responds with the correct garden produce for a given garden', () => {
    db.getProduceByGardenId.mockImplementation((gardenId) => {
      expect(gardenId).toBe('1')
      return Promise.resolve([
        { id: 1, name: 'apple', produceType: 'fruits' },
        { id: 2, name: 'orange', produceType: 'veggies' },
      ])
    })

    return request(server)
      .get('/api/v1/gardenproduce/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.produce[0].id).toBe(1)
        expect(res.body.produce[0].name).toBe('apple')
        expect(res.body.produce[0].produceType).toBe('fruits')
        expect(res.body.produce).toHaveLength(2)
        return null
      })
  })

  it('responds with status 500 and an error during a DB error', () => {
    db.addGardenProduce.mockImplementation(() =>
      Promise.reject(new Error('mock addGardenProduce error'))
    )
    return request(server)
      .post('/api/v1/gardenproduce')
      .set(testAuthAdminHeader)
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock addGardenProduce error')
        expect(res.body.error.title).toBe('Unable to add garden produce')
        return null
      })
  })
})
