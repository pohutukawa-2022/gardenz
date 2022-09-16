import requestor from '../../../../consume'
import { getState, dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

//create a post api function to post to the server-side-route
export async function addGarden(data, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user

  dispatch(setWaiting())
  try {
    await consume('/gardens', token, 'post', data)
    dispatch(clearWaiting())
    return null
  } catch (error) {
    dispatch(showError(error.message))
  }
}
