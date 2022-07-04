import requestor from '../../../consume'
import { dispatch } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export function getProduce(gardenid, consume = requestor) {
  dispatch(setWaiting())
  return consume(`/gardenproduce/${gardenid}`)
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
