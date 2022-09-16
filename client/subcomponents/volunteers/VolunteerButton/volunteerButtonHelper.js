import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { clearWaiting, setWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function toggleVolunteerStatus(
  eventId,
  willVolunteer,
  setVolunteering,
  consume = requestor
) {
  
    const storeState = getState()
    const { id, token } = storeState.user
    if (!id) {
      dispatch(showError('Please register or sign in to volunteer.'))
    } else {
      dispatch(setWaiting())
      const routeMethod = willVolunteer ? 'post' : 'delete'
      const userData = { userId: id, eventId }
      try {
      await consume('/volunteers', token, routeMethod, userData)
      setVolunteering(willVolunteer)
      dispatch(clearWaiting())
    }
  } catch (error) {
    dispatch(showError(error.message))
  }
  
}
