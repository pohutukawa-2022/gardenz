import { dispatch } from '../../store'
import { hideError } from '../../slices/error'

export function hide() {
  dispatch(hideError())
}
