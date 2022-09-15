import { useEffect, useState } from 'react'
import { clearWaiting, setWaiting, showError } from '../../slices/waiting'
import { dispatch } from '../../store'
import { getGarden } from './useGardenHelper'

export default function useGarden(gardenId) {
  const [garden, setGarden] = useState({
    name: '',
    description: '',
    address: '',
    lat: '',
    lon: '',
    email: '',
    phone: '',
    events: [],
    imageHeaderUrl: '',
  })

  // The OJ VERSION

  //   useEffect(() => {
  //     dispatch(setWaiting())
  //     getGarden(gardenId)
  //       .then(setGarden)
  //       .then(() => dispatch(clearWaiting()))
  //       .catch((error) => {
  //         dispatch(showError(error.message))
  //       })
  //   }, [gardenId])

  //   return garden
  // }

  useEffect(() => {
    dispatch(setWaiting())
    try {
      const theGarden = async () => {
        const gardens = await getGarden(gardenId)
        setGarden(gardens)
        dispatch(clearWaiting())
      }
      theGarden()
    } catch (error) {
      dispatch(showError(error.message))
    }
    return () => {}
  }, [gardenId])
  return garden
}
