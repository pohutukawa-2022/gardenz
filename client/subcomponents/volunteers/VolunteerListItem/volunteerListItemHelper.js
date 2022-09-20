import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function toggleAttendance(volunteerData, consume = requestor) {
  try {
    const storeState = getState()
    const { token } = storeState.user
    dispatch(setWaiting())
    await consume('/volunteers', token, 'patch', volunteerData)
    dispatch(clearWaiting())
    return true
  } catch (error) {
    dispatch(showError(error.message))
    return false
  }
}
