import { getVolunteers } from './volunteersHelper'
import { clearWaiting, setWaiting } from '../../../slices/waiting'
import { dispatch } from '../../../store'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('getVolunteerNumbers', () => {
  describe('-> GET /events/${id} api call success', () => {
    it('dispatches waiting actions correctly and returns correct length of Volunteers', () => {
      function consume() {
        return Promise.resolve({
          body: {
            volunteers: [{ name: 'bob' }, { name: 'steve' }],
          },
        })
      }
      return getVolunteers(2, consume).then((volunteers) => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        expect(volunteers).toHaveLength(2)
        return null
      })
    })
  })
  describe('-> GET /events/${id}', () => {
    it('dispatches error correctly', () => {
      function consume() {
        return Promise.reject(new Error('Mock error'))
      }
      return getVolunteers(null, consume).then(() => {
        expect(dispatch.mock.calls[1][0].payload).toBe('Mock error')
      })
    })
  })
})
