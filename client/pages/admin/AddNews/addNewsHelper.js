import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../actions/waiting'
import { showError } from '../../../actions/error'
import requestor from '../../../consume'

export function addNews(news, navigateTo, consume = requestor) {
  const storeState = getState()
  const { gardenId, token } = storeState.user
  const newEvent = {
    gardenId,
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
