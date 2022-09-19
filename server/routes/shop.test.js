const request = require('supertest')

const server = require('../server')
const db = require('../db/shop')
const log = require('../logger')

jest.mock('../logger')
jest.mock('../db/shop')

const mockProduct = [
  {
    "id": 1,
    "stock": 175,
    "name": "large veggie box",
    "description": "a large box filled with fresh seasonal produce grown at your local garden",
    "price": 29,
    "image": "www.linktowhereeverthisimageis.com",
    "productId": 1
  }
]

describe('GET /api/v1/shop/:id', () => {
  it('responds with product for certain garden', () => {
    db.getProductsByGarden.mockImplementation(() =>
      Promise.resolve(mockProduct)
    )
    return request(server)
      .get('/api/v1/shop/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(mockProduct)
        expect(res.body).toHaveLength(1)
        expect(res.body[0].price).toBe(29)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].stock).toBe(175)
        expect(res.body[0].name).toBe("large veggie box")
        expect(res.body[0].description).toBe("a large box filled with fresh seasonal produce grown at your local garden")
        expect(res.body[0].image).toBe("www.linktowhereeverthisimageis.com")
        expect(res.body[0].productId).toBe(1)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getProductsByGarden.mockImplementation(() =>
      Promise.reject(new Error('mock getProductsByGarden error'))
    )
    return request(server)
      .get('/api/v1/shop/1')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getProductsByGarden error')
        expect(res.body.error.title).toBe('Unable to retrieve products')
        return null
      })
  })
 })
