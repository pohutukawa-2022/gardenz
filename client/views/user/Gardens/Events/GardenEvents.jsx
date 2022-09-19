
import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Events from '../../../../subcomponents/events/Events/Events'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function GardenEvents() {
  const user = useSelector((globalState) => globalState.user)
  const { id } = useParams()
  const { name, address, imageHeaderUrl, events } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <Events address={address} events={events} user={user} />
    </>
  )
}
