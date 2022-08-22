const request = require('supertest')

const server = require('../server')
const db = require('../db/gallery')
const log = require('../logger')

jest.mock('../db/gallery')
jest.mock('../logger')

describe('GET /api/v1/gallery/:id', () => {
  it('responds with the correct gallery', () => {
    db.getImages.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 1,
          name: 'banana',
          url: 'url',
        },
      ])
    })

    return request(server)
      .get('/api/v1/gallery/3')
      .then((res) => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe('banana')
        expect(res.body[0].url).toBe('url')
        return null
      })
  })

  it('responds with the status 500', () => {
    db.getImages.mockImplementation(() => {
      return Promise.reject(new Error('mock getImages error'))
    })

    return request(server)
      .get('/api/v1/gallery/3')
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getImages error')
        expect(res.body.error.title).toBe('Unable to retrieve gallery images')
        return null
      })
  })
})

describe('POST /api/v1/:gardenId', () => {
  it.todo('responds with the correct gallery')
  it.todo('responds with the status 500')
})
