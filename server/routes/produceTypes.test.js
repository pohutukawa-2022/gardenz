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

describe('GET /api/v1/producetypes', () => {
  it('responds with the correct produce types', () => {
    db.getProduceTypes.mockImplementation(() => {
      return Promise.resolve([
        { id: 1, name: 'fruit' },
        { id: 2, name: 'veggies' },
      ])
    })

    return request(server)
      .get('/api/v1/producetypes')
      .then((res) => {
        expect(res.body.produceTypes[0]).toEqual({ id: 1, name: 'fruit' })
        expect(res.body.produceTypes[1]).toEqual({ id: 2, name: 'veggies' })
        return null
      })
  })

  it('responds with status 500 and an error during a DB error', () => {
    db.getProduceTypes.mockImplementation(() =>
      Promise.reject(new Error('mock produce type error'))
    )
    return request(server)
      .get('/api/v1/producetypes')
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock produce type error')
        expect(res.body.error.title).toBe('Unable to retrieve produce types')
        return null
      })
  })
})
