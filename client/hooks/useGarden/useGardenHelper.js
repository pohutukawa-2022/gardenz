import consume from '../../consume'

export async function  getGarden(id) {
  const headers = {
    Accept: 'application/json',
  }
  try {
    const garden = await res.body
    
    // return consume(`/gardens/${id}`, '', 'get', {}, headers)
      // return {
      //   name: garden.name,
      //   description: garden.description,
      //   address: garden.address,
      //   imageHeaderUrl: garden.imageHeaderUrl,
      //   events: garden.events,
      //   lat: garden.lat,
      //   lon: garden.lon,
      //   phone: garden.phone,
      //   email: garden.email,
      // }
    }  catch (err) {
       res.status(500).json({
          error: {
            title: 'Unable to retrieve event',
          },
        })
      }
}
