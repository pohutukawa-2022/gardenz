import { dispatch, getState } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import requestor from '../../../../consume'

// TO DO: Update gallery function with updated data
// Can use Update event for insp

// export function updateGallery(gardenId, update, navigateTo, consume = requestor ) {
//   const storeState = getState()
//   const {token} = storeState.user
//   const galleryToUpdate = {
//     id: Number
//   }
// }
