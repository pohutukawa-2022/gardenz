import { getVolunteers } from './volunteersHelper'
import { clearWaiting, setWaiting } from '../../../slices/waiting'
import { dispatch, getState } from '../../../store'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

test.todo('add test for addingVolunteers')

describe('getVolunteerNumbers', () => {
  describe('-> GET /events/${id} api call success', () => {
    it('dispatches waiting actions correctly', () => {
      getState.mockImplementation(() => {
        return {
          user: {
            token: '',
          },
        }
      })
      function consume() {
        return Promise.resolve()
      }

      return getVolunteers(consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        return null
      })
    })
  })
})

// To Test
/**
 * 1.1) Function gets the correct number of volunteers by garden ID
 *
 * 2.1) Test that the form handler work, number of volunteer increases by 1
 * 2.2) Only signed in user can add as a volunteer
 */
