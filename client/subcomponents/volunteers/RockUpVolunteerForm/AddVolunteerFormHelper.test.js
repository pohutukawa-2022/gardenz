import { dispatch, getState } from '../../../store'
import { addVolunteer } from './AddVolunteerFormHelper'
import { showError } from '../../../slices/error'
import { setWaiting } from '../../../slices/waiting'

jest.mock('../../../store')

afterEach(() => {
  return dispatch.mockClear()
})

describe('Testing AddVolunteerFormHelper', () => {
  it('Should dispatch clear waiting and call addExtraVolunteer', async () => {
    expect.assertions(5)
    const mockVolunteer = {
      id: 1,
      firstName: 'tester',
      lastName: 'tested',
    }
    const mockAdd = jest.fn((newVolunteer) => {
      expect(newVolunteer).toEqual({
        id: 1,
        firstName: 'tester',
        lastName: 'tested',
        extraVolId: 77,
      })
    })
    getState.mockImplementation(() => ({ user: { token: 'dummy token' } }))
    const mockConsume = jest.fn((path, token, method, volunteer) => {
      expect(path).toBe('/volunteers/extras')
      expect(method).toBe('post')
      expect(volunteer).toBe(mockVolunteer)
      return Promise.resolve({
        body: {
          extraVolId: 77,
        },
      })
    })

    await addVolunteer(mockVolunteer, mockAdd, mockConsume)
    expect(dispatch).toHaveBeenCalledTimes(2)
    return null
  })

  it('Should dispatch error action when api fails', async () => {
    const mockVolunteer = {
      id: 66,
      firstName: 'I fail',
      lastName: 'Everything',
    }
    const mockAdd = jest.fn()
    const mockConsume = jest.fn(() => {
      return Promise.reject(new Error('Unable to add extra volunteer'))
    })
    await addVolunteer(mockVolunteer, mockAdd, mockConsume)
    expect(dispatch.mock.calls[0][0].type).toBe(setWaiting.type)
    expect(dispatch.mock.calls[1][0].type).toBe(showError.type)
  })
})
