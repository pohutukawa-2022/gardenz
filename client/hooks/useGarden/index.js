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

  useEffect(() => {
    dispatch(setWaiting())
    try {
      const theGarden = async () => {
        const garden = await getGarden(gardenId)
        setGarden(garden)
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
