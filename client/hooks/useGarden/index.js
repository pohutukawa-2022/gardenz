import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { clearWaiting, setWaiting, showError } from '../../slices/waiting'
import { dispatch } from '../../store'
import { getGarden } from './useGardenHelper'

export default function useGarden() {
  const { id } = useParams()
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
    getGarden(id)
      .then((garden) => setGarden(garden))
      .then(() => dispatch(clearWaiting()))
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }, [id])

  return garden
}
