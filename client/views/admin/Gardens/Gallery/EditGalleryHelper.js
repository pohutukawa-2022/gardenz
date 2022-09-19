import { dispatch, getState } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import requestor from '../../../../consume'

export function updateGalleryImage(
  updatedImage,
  navigateTo,
  consume = requestor
) {
  const storeState = getState()
  const { token } = storeState.user

  const galleryImageToUpdate = {
    gardenId: Number(updatedImage.gardenId),
    ...updatedImage,
  }
  dispatch(setWaiting())
  return consume(
    `/gallery/${galleryImageToUpdate.gardenId}`,
    token,
    'patch',
    galleryImageToUpdate
  )
    .then(() => {
      navigateTo(`/admin/gardens/${galleryImageToUpdate.gardenId}/gallery`)
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function getGalleryImage(gardenId, imageId, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user

  dispatch(setWaiting())
  return consume(`/gallery/${gardenId}/${imageId}`, token, 'get')
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
}
