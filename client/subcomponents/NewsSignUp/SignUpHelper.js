import requestor from '../../consume'
import { dispatch } from '../../store'
import { setWaiting, clearWaiting } from '../../slices/waiting'
import { showError } from '../../slices/error'

export async function registerSignUp(values, navigateTo, consume = requestor) {
  const newSubscriber = {
    firstName: values.firstName,
    lastName: values.lastName,
    gardenId: values.gardenId,
    email: values.email,
  }

  dispatch(setWaiting(newSubscriber))
  try {
    const res = await consume('/users', 'post', newSubscriber)
    const newSubscriber = res.body
    dispatch(newSubscriber)
    navigateTo(`/`)
    return null
  } catch (err) {
    dispatch(showError(err.message))
  } finally {
    dispatch(clearWaiting())
  }
}
