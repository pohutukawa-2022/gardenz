import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGarden } from '../views/user/Gardens/about/aboutHelper'

export default function useGarden() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)

  useEffect(() => {
    getGarden(id)
  }, [id])

  return garden
}
