import { toggleVolunteerStatus } from './volunteerButtonHelper'
import { setWaiting } from '../../../slices/waiting'
import { dispatch, getState } from '../../../store'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('toggleVolunteerStatus', () => {
  it('dispatches error if user not logged in', () => {
    getState.mockImplementation(() => ({
      user: { id: null, token: 'dummytoken' },
    }))

    toggleVolunteerStatus()
    expect(dispatch.mock.calls[0][0].payload).toMatch(
      'Please register or sign in to volunteer.'
    )
  })

  it('makes post request when wanting to volunteer', () => {
    expect.assertions(2)
    getState.mockImplementation(() => ({ user: { id: 2 } }))
    const eventId = 1
    const willVolunteer = true

    function consume(url, token, method, userData) {
      expect(method).toBe('post')
      expect(userData.userId).toBe(2)
      return Promise.resolve()
    }

    return toggleVolunteerStatus(eventId, willVolunteer, null, consume)
  })

  it('makes delete request when wanting to unvolunteer', () => {
    expect.assertions(2)
    getState.mockImplementation(() => ({
      user: { id: 4, token: 'dummytoken' },
    }))
    const eventId = 3
    const willVolunteer = false

    function consume(url, token, method, userData) {
      expect(method).toBe('delete')
      expect(userData.userId).toBe(4)
      return Promise.resolve()
    }

    return toggleVolunteerStatus(eventId, willVolunteer, null, consume)
  })

  it('dispatches correct actions and calls setVolunteering when api call successful', async () => {
    getState.mockImplementation(() => ({
      user: { id: 4, token: 'dummytoken' },
    }))
    const willVolunteer = true
    const setVolunteering = jest.fn()
    const eventId = 1

    function consume() {
      return Promise.resolve()
    }

    try {
      await toggleVolunteerStatus(
        eventId,
        willVolunteer,
        setVolunteering,
        consume
      )
      expect(dispatch).toHaveBeenCalledWith(setWaiting())
      expect(setVolunteering).toHaveBeenCalledWith(true)
    } catch {
      return null
    }
  })

  it('dispatches error correctly and returns false when api call unsuccessful', async () => {
    getState.mockImplementation(() => ({
      user: { id: 1, token: 'dummytoken' },
    }))
    const setVolunteering = jest.fn()

    function consume() {
      return Promise.reject(new Error('mock error'))
    }

    try {
      await toggleVolunteerStatus(null, null, setVolunteering, consume)
      expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
      expect(setVolunteering).not.toHaveBeenCalled()
    } catch {
      return null
    }
  })
})
