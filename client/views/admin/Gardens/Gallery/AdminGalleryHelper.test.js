import { dispatch } from '../../../../store'
import { getGalleryById } from './AdminGalleryHelper'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('get images by id of the gallery', () => {
  describe('-> GET /gardens/ api call success', () => {
    it('dispatches waiting actions correctly', () => {
      function consume() {
        return Promise.resolve()
      }
      return getGalleryById(consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        return null
      })
    })

    it('returns correct images array', () => {
      function consume() {
        return Promise.resolve({
          body: [
            {
              id: 1,
              name: 'Test Picture 1',
              url: 'https://www.google.com/',
              garden_id: 2,
            },
            {
              id: 2,
              name: 'Test Picture 2',
              url: 'https://www.ggle.com/',
              garden_id: 2,
            },
          ],
        })
      }
      return getGalleryById(2, consume).then((images) => {
        expect(images[0].id).toBe(1)
        expect(images[0].name).toBe('Test Picture 1')
        expect(images[0].url).toBe('https://www.google.com/')
        expect(images[0].garden_id).toBe(2)

        expect(images[1].id).toBe(2)
        expect(images[1].name).toBe('Test Picture 2')
        expect(images[1].url).toBe('https://www.ggle.com/')
        expect(images[1].garden_id).toBe(2)

        expect(images).toHaveLength(2)
        return null
      })
    })
  })

  describe('-> on GET /gardens api call rejection', () => {
    it('dispatches error correctly', () => {
      function consume() {
        return Promise.reject('mock error')
      }
      return getGalleryById(2, consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(showError('mock error'))
        return null
      })
    })
  })
})
