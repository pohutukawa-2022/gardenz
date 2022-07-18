import React from 'react'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function Shop() {
  const { name, imageHeaderUrl } = useGarden()

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here</p>
    </>
  )
}
