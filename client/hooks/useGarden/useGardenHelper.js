import consume from '../../consume'
import { dispatch } from '../../store'
import { showError } from '../../slices/error'

export async function getGarden(id) {
  const headers = {
    Accept: 'application/json',
  }
  try {
    const res = await consume(`/gardens/${id}`, '', 'get', {}, headers)
    const garden = res.body
    return {
      name: garden.name,
      description: garden.description,
      address: garden.address,
      imageHeaderUrl: garden.imageHeaderUrl,
      events: garden.events,
      lat: garden.lat,
      lon: garden.lon,
      phone: garden.phone,
      email: garden.email,
    }
  } catch (err) {
    dispatch(showError(err.message))
  }
}

// export function getGarden(id) {
//   const headers = {
//     Accept: 'application/json',
//   }
//   return consume(`/gardens/${id}`, '', 'get', {}, headers).then((res) => {
//     const garden = res.body
//     return {
//       name: garden.name,
//       description: garden.description,
//       address: garden.address,
//       imageHeaderUrl: garden.imageHeaderUrl,
//       events: garden.events,
//       lat: garden.lat,
//       lon: garden.lon,
//       phone: garden.phone,
//       email: garden.email,
//     }
//   })
// }
