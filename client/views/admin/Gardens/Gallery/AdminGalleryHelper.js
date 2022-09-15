import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function getGalleryById(id, consume = requestor) {
  dispatch(setWaiting())

  return consume(`/gardens/${id}/gallery`)
    .then((res) => {
      dispatch(clearWaiting())
      console.log('from helper', res.body)
      return res.body //removed .gardens
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
