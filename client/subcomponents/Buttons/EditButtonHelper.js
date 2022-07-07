import requestor from '../../consume'
import { dispatch, getState } from '../../store'
import { clearWaiting, setWaiting } from '../../slices/waiting'
import { showError } from '../../slices/error'
import { updateEventVols } from '../../slices/garden'

export function toggleEditStatus(
  eventId,
  willEdit,
  setEditing,
  consume = requestor
) {
  const storeState = getState()
  const { id, token } = storeState.user
  if (!id) {
    dispatch(showError('Please register or sign in to edit.'))
  } else {
    dispatch(setWaiting())
    const routeMethod = willEdit ? 'post' : 'delete'
    const userData = { userId: id, eventId }

    return consume('/edits', token, routeMethod, userData)
      .then(() => {
        dispatch(updateEventVols(eventId))
        setEditing(willEdit)
        dispatch(clearWaiting())
        return null
      })
      .catch((error) => {
        dispatch(showError(error.message))
        return null
      })
  }
}
