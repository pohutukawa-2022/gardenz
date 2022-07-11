import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllGardens } from '../../../views/user/Gardens/Index/IndexHelper'
import { setGarden } from '../../../slices/garden'
import { showError } from '../../../slices/error'

export default function GardenHeader() {
  const [gardenList, setGardenList] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    getAllGardens()
      .then((gardens) => {
        setGardenList(gardens)
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
        return false
      })
  }, [])

  const match = gardenList.find((garden) => garden.id === Number(id))

  dispatch(setGarden(match))
  const { image: headerImage, name } = useSelector(
    (globalState) => globalState.garden
  )

  return (
    <>
      <figure>
        <img
          className="object-cover h-52 w-full"
          src={headerImage}
          alt={name}
        />
      </figure>
    </>
  )
}
