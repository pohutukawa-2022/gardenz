const request = require('supertest')

const server = require('../server')
const db = require('../db/produce')
const log = require('../logger')
const { getAdminToken } = require('./mockToken')

jest.mock('../logger')
jest.mock('../db/produce')
jest.mock('../db/users')

const mockGardenProduce = {
  produceId: 1,
  gardenId: 1,
  status: true,
}

const testAuthAdminHeader = {
  Authorization: `Bearer ${getAdminToken()}`,
}

describe('POST /api/v1/garden_produce', () => {
  it('responds with status 401 when no token is passed', () => {
    return request(server)
      .post('/api/v1/garden_produce')
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
      .post('/api/v1/garden_produce')
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
      .post('/api/v1/garden_produce')
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
