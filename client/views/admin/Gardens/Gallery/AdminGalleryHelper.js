import requestor from '../../../../consume'
import { dispatch, getState } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function getGalleryById(id, consume = requestor) {
  dispatch(setWaiting())

  return consume(`/gardens/${id}/gallery`)
    .then((res) => {
      dispatch(clearWaiting())
      return res.body //removed .gardens
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function deleteImgById(imgId, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user
  const test = {
    imgId,
  }
  console.log('from helper', test)
  dispatch(setWaiting())
  return consume(`/gardens/1/gallery`, token, 'delete', test)
    .then((res) => {
      dispatch(clearWaiting())
      return res.body //removed .gardens
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
