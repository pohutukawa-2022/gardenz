const request = require('supertest')

const server = require('../server')
const dbNews = require('../db/news')
const dbUsers = require('../db/users')
const log = require('../logger')
const moment = require('moment')
const { getAdminToken } = require('./mockToken')

jest.mock('moment')
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

  it('responds with status 200', () => {
    moment.mockImplementation(() => ({
      format: () => '02/02/2022',
    }))

    dbNews.addNews.mockImplementation((newNews) => {
      expect(newNews.gardenId).toBe(2)
      expect(newNews.title).toMatch('New New News')
      expect(newNews.createdOn).toMatch('02/02/2022')
      expect(newNews.content).toMatch('This is my new news post')
      expect(newNews.author).toMatch('auth0|123')
    })

    dbUsers.getUsersByAuth.mockImplementation(() => {
      return Promise.resolve({ id: 'auth0|123' })
    })

    return request(server)
      .post('/api/v1/news/2')
      .set(testAuthAdminHeader)
      .send(newNews)
      .expect(201)
      .then(() => {
        expect(dbNews.addNews).toHaveBeenCalled()
        expect(dbUsers.getUsersByAuth).toHaveBeenCalled()
        return null
      })
  })

  it('responds with status 500', () => {
    dbNews.addNews.mockImplementation(() =>
      Promise.reject(new Error('mock addNews error'))
    )
    return request(server)
      .post('/api/v1/news/2')
      .set(testAuthAdminHeader)
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock addNews error')
        expect(res.body.error.title).toBe('Unable to add news')
        return null
      })
  })
})
