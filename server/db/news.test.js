const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./news')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getAllNews', () => {
  it('gets all news', () => {
    return db.getAllNews(testDb).then((news) => {
      expect(news).toHaveLength(2)
      expect(news[0].title).toMatch('Lettuce Picking Season')
      expect(news[1].title).toMatch('Where are my CABBAGES')
      return null
    })
  })
})

describe('getNewsByGardenId', () => {
  it('return all of the news related to the garden id', () => {
    return db.getNewsByGardenId(1, testDb).then((news) => {
      expect(news).toHaveLength(2)
      expect(news[1].title).toMatch('Where are my CABBAGES')
      return null
    })
  })
})

describe('getNewsById', () => {
  it('returns the correct News', () => {
    return db.getNewsById(1, testDb).then((news) => {
      expect(news.id).toBe(1)
      expect(news.gardenId).toBe(1)
      expect(news.author).toBe(2)
      expect(news.title).toMatch('Lettuce Picking Season')
      return null
    })
  })
  it('returns the correct name of the author', () => {
    return db.getNewsById(1, testDb).then((news) => {
      expect(news.firstName).toMatch('User')
      expect(news.lastName).toMatch('second')
      return null
    })
  })
})

describe('addNews', () => {
  it('adds the new news to the db', () => {
    const newNews = {
      gardenId: 7,
      author: 1,
      title: 'Testing the tests',
      createdOn: '30/11/2021',
      content: 'This is just a test',
    }
    return db
      .addNews(newNews, testDb)
      .then(([id]) => {
        return db.getNewsById(id, testDb)
      })
      .then((news) => {
        expect(news.id).toBe(3)
        expect(news.gardenId).toBe(7)
        expect(news.author).toBe(1)
        expect(news.title).toMatch('Testing the tests')
        return null
      })
  })
})

describe('deleteNews', () => {
  it('deletes the news from the db by id', () => {
    return db
      .deleteNews(1, testDb)
      .then(() => db.getAllNews(testDb))
      .then((news) => {
        const filtered = news.filter((element) => element.id === 1)
        expect(filtered).toHaveLength(0)
        return null
      })
  })

  it.todo('deletes all child comments')
})

describe('updateNews', () => {
  it('returns updated news', () => {
    const updatedNews = {
      id: 1,
      gardenId: 1,
      author: 2,
      title: 'Woohoo! I was updated!',
      created_on: '2021-10-10',
      content: 'This is a cool update',
    }
    return db.updateNews(updatedNews, testDb).then((news) => {
      expect(news.title).toMatch('Woohoo! I was updated!')
      expect(news.content).toMatch('This is a cool update')
      return null
    })
  })
})
