import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here</p>
    </>
  )
}
