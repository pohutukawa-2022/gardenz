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
      events: [
        {
          id: 1,
          title: 'Banana forage',
          address: 'banana farm',
          date: '6/07/22',
          volunteersNeeded: 20,
          totalVolunteers: 15,
          isVolunteer: null,
          status: 'on',
        },
        {
          id: 2,
          title: 'hammock craft',
          address: 'hammock workshop',
          date: '6/07/22',
          volunteersNeeded: 20,
          totalVolunteers: 15,
          isVolunteer: null,
          status: 'on',
        },
        {
          id: 3,
          title: 'lemonade stand',
          date: '6/07/22',
          address: 'Daniels lawn',
          volunteersNeeded: 20,
          totalVolunteers: 15,
          isVolunteer: null,
          status: 'on',
        },
      ],
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
