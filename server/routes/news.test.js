const request = require('supertest')

const server = require('../server')
const db = require('../db/news')
const log = require('../logger')

jest.mock('../logger')
jest.mock('../db/news')

const mockNewsForGarden = [
  {
    id: 1,
    garden_id: 1,
    author: 1,
    first_name: 'Admin',
    last_name: 'User',
    title: 'Test News',
    content: 'This is a test news',
    created_on: '29/11/2021',
  },
  {
    id: 2,
    garden_id: 1,
    author: 1,
    first_name: 'Admin',
    last_name: 'User',
    title: 'Test News 2',
    content: 'This is test news 2',
    created_on: '29/11/2021',
  },
]

describe('GET /api/v1/news/:gardenid', () => {
  it('responds with blog news for the specific garden', () => {
    db.getNewssByGardenId.mockImplementation(() =>
      Promise.resolve(mockNewsForGarden)
    )
    return request(server)
      .get('/api/v1/news/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.news).toEqual(mockNewsForGarden)
        expect(res.body.news).toHaveLength(2)
        expect(res.body.news[0].garden_id).toBe(1)
        expect(res.body.news[0].author).toBe(1)
        expect(res.body.news[0].first_name).toBe('Admin')
        expect(res.body.news[1].last_name).toBe('User')
        expect(res.body.news[1].title).toBe('Test News 2')
        expect(res.body.news[1].created_on).toBe('29/11/2021')
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getNewssByGardenId.mockImplementation(() =>
      Promise.reject(new Error('mock getNewsByGardenId error'))
    )
    return request(server)
      .get('/api/v1/news/1')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getNewsByGardenId error')
        expect(res.body.error.title).toBe('Unable to retrieve news')
        return null
      })
  })
})
