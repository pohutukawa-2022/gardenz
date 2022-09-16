import { dispatch, getState } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import requestor from '../../../../consume'

export async function addEvent(event, navigateTo, consume = requestor) {
  try {
    const storeState = getState()
    const { gardenId, token } = storeState.user
    const newEvent = {
      gardenId,
      ...event,
    }
    dispatch(setWaiting())
    await consume('/events', token, 'post', newEvent)

    navigateTo(`/gardens/${gardenId}`)
  } catch (err) {
    dispatch(showError(err.message))
  } finally {
    dispatch(clearWaiting())
  }
}
