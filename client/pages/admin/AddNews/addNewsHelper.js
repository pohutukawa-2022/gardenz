import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../actions/waiting'
import { showError } from '../../../actions/error'
import requestor from '../../../consume'

export function addNews(news, navigateTo, consume = requestor) {
  const storeState = getState()
  const { gardenId, token, id } = storeState.user
  const newEvent = {
    gardenId,
    author: id, //can we get this from token on the backend??
    ...news,
  }
  dispatch(setWaiting())
  return consume(`/news/${gardenId}`, token, 'post', newEvent)
    .then(() => {
      navigateTo(`/gardens/${gardenId}/news`)
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
