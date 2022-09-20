import requestor from '../../consume'
import { dispatch } from '../../store'
import { showError } from '../../slices/error'

export async function registerSignUp(id, values, consume = requestor) {
  const newSubscriber = {
    firstName: values.firstName,
    gardenId: id,
    lastName: values.lastName,
    email: values.email,
  }

  try {
    await consume(`/gardens/${id}/signup`, '', 'post', newSubscriber)

    return null
  } catch (err) {
    dispatch(showError(err.message))
  }
}
