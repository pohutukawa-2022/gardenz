const request = require('supertest')

const server = require('../server')
const dbNews = require('../db/news')
const dbUsers = require('../db/users')
const log = require('../logger')
const { getAdminToken } = require('./mockToken')

jest.mock('../logger')
jest.mock('../db/news')
jest.mock('../db/users')

const newNews = {
  title: 'New New News',
  content: 'This is my new news post',
  createdOn: '02/02/2022',
  gardenId: 2,
}

const testAuthAdminHeader = {
  Authorization: `Bearer ${getAdminToken()}`,
}

describe('POST /api/v1/news/:id', () => {
  it('responds with status 401 when no token is passed', () => {
    return request(server)
      .post(`/api/v1/news/2`)
      .then((res) => {
        expect(res.status).toBe(401)
        return null
      })
  })

  // Tests incomplete
  // it('responds with the correct id', () => {
  //   dbNews.addNews.mockImplementation((newNews) => {
  //     expect(newNews.gardenId).toBe(2)
  //     expect(newNews.title).toMatch('New New News')
  //     expect(newNews.createdOn).toMatch('02/02/2022')
  //     expect(newNews.content).toMatch('This is my new news post')
  //     expect(newNews.author).toMatch(99)
  //     return Promise.resolve([7])
  //   })

  //   dbUsers.getUsersByAuth.mockImplementation((auth0Id) => {
  //     return Promise.resolve({ id: 99 })
  //   })

  //   return (
  //     request(server)
  //       .post('/api/v1/news/2')
  //       .set(testAuthAdminHeader)
  //       .send(newNews)
  //       .expect('Content-Type', /json/)
  //       .expect(201)
  //       .then((res) => {
  //         console.log(res)
  //         return res
  //       })
  //       .then((res) => {
  //         expect(res[0]).toBe(7)
  //         expect(dbNews.addNews).toHaveBeenCalled()
  //         expect(dbUsers.getUsersByAuth).toHaveBeenCalled()
  //         return null
  //       })
  //   )
  // })

  // it('responds with status 500 and an error during a DB error', () => {
  //   db.addGarden.mockImplementation(() =>
  //     Promise.reject(new Error('mock addGarden error'))
  //   )
  //   return request(server)
  //     .post('/api/v1/gardens')
  //     .set(testAuthAdminHeader)
  //     .expect('Content-Type', /json/)
  //     .expect(500)
  // })
})
