const request = require('supertest')

const server = require('../server')
const db = require('../db/produce')
const log = require('../logger')
const { getAdminToken } = require('./mockToken')

jest.mock('../logger')
jest.mock('../db/produce')
jest.mock('../db/users')

const mockProduce = {
  name: 'Melon',
  produceTypeId: 2,
}

const testAuthAdminHeader = {
  Authorization: `Bearer ${getAdminToken()}`,
}

describe('POST /api/v1/produce', () => {
  it('responds with status 401 when no token is passed', () => {
    return request(server)
      .post('/api/v1/produce')
      .then((res) => {
        expect(res.status).toBe(401)
        return null
      })
  })

  it('responds with the correct produce', () => {
    db.addProduce.mockImplementation((newProduce) => {
      expect(newProduce.id).toBe(2)
      expect(newProduce.name).toMatch('Melon')
      expect(newProduce.produceTypeId).toBe(2)
      return Promise.resolve(mockProduce)
    })
  })

  it('responds with status 500 and an error during a DB error', () => {
    db.addProduce.mockImplementation(() =>
      Promise.reject(new Error('mock addProduce error'))
    )
    return request(server)
      .post('/api/v1/produce')
      .set(testAuthAdminHeader)
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock addProduce error')
        expect(res.body.error.title).toBe('Unable to add produce')
        return null
      })
  })
})
