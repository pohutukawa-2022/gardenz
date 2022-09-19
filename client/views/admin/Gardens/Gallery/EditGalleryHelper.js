import { dispatch, getState } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import requestor from '../../../../consume'

// TO DO: Update gallery function with updated data

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
      navigateTo(`/gallery/${galleryImageToUpdate.gardenId}`)
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}


