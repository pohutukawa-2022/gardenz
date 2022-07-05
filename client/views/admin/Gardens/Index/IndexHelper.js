import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function getAllGardens(consume = requestor) {
  dispatch(setWaiting())

  return consume('/gardens')
    .then((res) => {
      dispatch(clearWaiting())
      return res.body.gardens
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
