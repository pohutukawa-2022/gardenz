import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function addVolunteer(
  volunteer,
  addExtraVolunteer,
  consume = requestor
) {
  const { token } = getState().user
  dispatch(setWaiting())
  try {
    const res = await consume('/volunteers/extras', token, 'post', volunteer)

    dispatch(clearWaiting())
    const newVolunteer = { ...volunteer, ...res.body }
    addExtraVolunteer(newVolunteer)
    return null
  } catch (err) {
    dispatch(showError(err.message))
  }
}
