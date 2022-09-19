import { toggleAttendance } from './volunteerListItemHelper'

import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('toggleAttendance', () => {
  it('dispatches correctly and returns true on success', async () => {
    getState.mockImplementation(() => ({
      user: { id: 4, token: 'dummytoken' },
    }))
    const volunteerData = {
      eventId: 1,
      userId: 3,
      hasAttended: true,
    }
    function consume(path, token, method, data) {
      expect(method).toBe('patch')
      expect(data.hasAttended).toBeTruthy()
      return Promise.resolve()
    }
    const response = await toggleAttendance(volunteerData, consume)
    expect(response).toBeTruthy()
    expect(dispatch).toHaveBeenCalledWith(setWaiting())
    expect(dispatch).toHaveBeenCalledWith(clearWaiting())
  })

  it('dispatches correctly and returns false on API consumption failure', async () => {
    getState.mockImplementation(() => ({
      user: { id: 4, token: 'dummytoken' },
    }))
    const volunteerData = {
      eventId: 1,
      userId: 3,
      hasAttended: true,
    }
    function consume() {
      return Promise.reject(new Error('mock consume error'))
    }

    const response = await toggleAttendance(volunteerData, consume)
    expect(response).toBeFalsy()
    expect(dispatch).toHaveBeenCalledWith(setWaiting())
    expect(dispatch).toHaveBeenCalledWith(showError('mock consume error'))
  })
})
