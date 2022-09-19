import requestor from '../../../../consume'
import { dispatch, getState } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function getGalleryById(id, consume = requestor) {
  dispatch(setWaiting())

  return consume(`/gardens/${id}/gallery`)
    .then((res) => {
      dispatch(clearWaiting())
      console.log(typeof res.body)
      return res.body
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function deleteImgById(imgId, gardenId, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user
  const id = {
    imgId,
  }
  dispatch(setWaiting())
  return consume(`/gardens/${gardenId}/gallery`, token, 'delete', id)
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
