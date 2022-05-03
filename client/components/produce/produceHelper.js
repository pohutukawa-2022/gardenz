import requestor from '../../consume'
import { dispatch } from '../../store'
import { SET_WAITING, CLEAR_WAITING } from '../../actions/waiting'
import { showError } from '../../actions/error'

export function getProduce(gardenid, consume = requestor) {
  // Fake data - until backend route is made
  return (
    Promise.resolve({
      produceId: 1,
      gardens: [1, 2, 3],
      produce: [
        { id: 1, name: 'Spinach', produceType: 1 },
        { id: 2, name: 'Apple', produceType: 2 },
      ],
    })

      // dispatch(SET_WAITING())
      // return consume(`/gardenproduce/${gardenid}`)
      //   .then((res) => {
      // dispatch(CLEAR_WAITING())
      // const { data } = res.body
      // return data
      // })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  )
}
