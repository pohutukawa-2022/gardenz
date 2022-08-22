const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./gallery')

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

describe('getImages', () => {
  it('should return the image name for given garden', () => {
    return db.getImages(1, testDb).then((images) => {
      expect(images[0].name).toBe('image1')
      expect(images[0].url).toBeDefined()
      return null
    })
  })
})

describe('addImage', () => {
  it('should add an image to the list of images', () => {
    const newImage = {
      name: 'image 4',
      url: 'image_url',
      garden_id: 1,
    }
    return db
      .addImage(newImage, testDb)
      .then((newImageId) => {
        return testDb('gallery').where('id', newImageId)
      })
      .then(([row]) => {
        expect(row).toMatchObject({
          id: 4,
          name: 'image 4',
          url: 'image_url',
          garden_id: 1,
        })
        return null
      })
  })
})
