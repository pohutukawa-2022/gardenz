import requestor from '../../consume'
import { dispatch } from '../../store'
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'

export function getProduce(consume = requestor) {
  dispatch(setWaiting())
  return consume(`/produce`)
    .then((res) => {
      dispatch(clearWaiting())
      const { produce } = res.body
      return produce
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
