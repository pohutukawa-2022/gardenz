import requestor from '../../consume'
import { dispatch } from '../../store'
import { clearWaiting, setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'

export function getAllGardens(consume = requestor) {
  dispatch(setWaiting())

  return consume('/gardens')
    .then((res) => {
      dispatch(clearWaiting())
      const { gardens } = res.body
      return gardens
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}

//create a post api function to post to the server-side-route

export function addNewGarden(token, data, consume = requestor) {
  dispatch(setWaiting())

  return consume('/gardens', token, 'post', data)
    .then(() => {
      dispatch(clearWaiting())
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
