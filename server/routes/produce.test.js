const request = require('supertest')

const server = require('../server')
const db = require('../db/produce')

jest.mock('../logger')
jest.mock('../db/produce')

const mockProduce = [
  { id: 1, name: 'Strawberry', produce_type_id: 2 },
  { id: 2, name: 'Celery', produce_type_id: 5 },
]

describe('GET /api/v1/produce', () => {
  it('responds with all the produce', () => {
    db.getAllProduce.mockImplementation(() => Promise.resolve(mockProduce))
    return request(server)
      .get('/api/v1/produce')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.produce).toEqual(mockProduce)
        expect(res.body.produce).toHaveLength(2)
        expect(res.body.produce[0].name).toBe('Strawberry')
        expect(res.body.produce[0].produce_type_id).toBe(2)
        expect(res.body.produce[1].name).toBe('Celery')
        expect(res.body.produce[1].produce_type_id).toBe(5)
        return null
      })
  })

  test.todo('responds with status 500')
})
