import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import { setGarden } from '../../../../slices/garden'

export async function getGarden(id, user, consume = requestor) {
  dispatch(setWaiting())
  const headers = {
    Accept: 'application/json',
    userid: user.id,
  }

  return consume(`/gardens/${id}`, '', 'get', {}, headers)
    .then((res) => {
      const garden = res.body
      dispatch(
        setGarden({
          name: garden.name,
          description: garden.description,
          address: garden.address,
          imageHeaderUrl: garden.imageHeaderUrl,
          events: garden.events,
          lat: garden.lat,
          lon: garden.lon,
          phone: garden.phone,
          email: garden.email,
        })
      )
      dispatch(clearWaiting())
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
