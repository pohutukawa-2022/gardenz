import { dispatch, getState } from '../../../../store'
import { deleteImgById, getGalleryById } from './AdminGalleryHelper'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('GET for /gardens/:id/gallery', () => {
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

describe('DELETE for /gardens/:id/gallery', () => {
  it('send id, dispatches waiting', () => {
    getState.mockImplementation(() => ({
      user: { id: 4, token: 'dummytoken' },
    }))
    function consume() {
      return Promise.resolve()
    }

    return deleteImgById(1, 1, consume).then(() => {
      expect(dispatch).toHaveBeenCalledWith(setWaiting())
      expect(dispatch).toHaveBeenCalledWith(clearWaiting())
      return null
    })
  })
})
