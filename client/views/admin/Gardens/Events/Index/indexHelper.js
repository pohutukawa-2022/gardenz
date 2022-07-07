import requestor from '../../../../../consume'
import { dispatch } from '../../../../../store'
import { clearWaiting, setWaiting } from '../../../../../slices/waiting'
import { showError } from '../../../../../slices/error'
import { setGarden } from '../../../../../slices/garden'

export function getGarden() {
  dispatch(setWaiting())

  return Promise.resolve({
    body: {
      name: 'test name',
      description: 'description',
      address: 'address',
      url: 'url',
      events: 'events',
      lat: 0.5,
      lon: 0.4,
    },
  })
    .then((res) => {
      const garden = res.body
      dispatch(
        setGarden({
          name: garden.name,
          description: garden.description,
          address: garden.address,
          url: garden.url,
          events: garden.events,
          lat: garden.lat,
          lon: garden.lon,
        })
      )
      dispatch(clearWaiting())
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
