import { getGarden } from './aboutHelper'
import { setWaiting } from '../../../../slices/waiting'
import { setGarden } from '../../../../slices/garden'
import { dispatch } from '../../../../store'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

const mockUser = { id: 123 }

describe('getGarden', () => {
  describe('-> GET /gardens/:id api call success', () => {
    it('dispatches with the correct garden action', () => {
      function consume(path) {
        expect(path).toMatch('2')
        return Promise.resolve({
          body: {
            name: 'test garden',
            description: 'a rad test garden',
            events: [],
            address: 'cool place, nz',
            imageHeaderUrl: 'url',
            lat: 123,
            lon: -123,
            fake: 'asdf',
          },
        })
      }
      return getGarden(2, mockUser, consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(
          setGarden({
            name: 'test garden',
            description: 'a rad test garden',
            imageHeaderUrl: 'url',
            events: [],
            address: 'cool place, nz',
            lat: 123,
            lon: -123,
          })
        )
        return null
      })
    })
  })

  describe('-> GET /gardens/:id api call rejection', () => {
    it('dispatches error correctly', () => {
      function consume() {
        return Promise.reject(new Error('mock error'))
      }
      return getGarden(null, mockUser, consume).then(() => {
        expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
        return null
      })
    })
  })
})
