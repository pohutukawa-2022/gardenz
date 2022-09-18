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
    id: Number(updatedImage.id),
    ...updatedImage,
  }
  dispatch(setWaiting())
  return consume(
    `/gallery/${galleryImageToUpdate.id}`,
    token,
    'patch',
    galleryImageToUpdate
  )
    .then(() => {
      navigateTo(`/gallery`)
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
