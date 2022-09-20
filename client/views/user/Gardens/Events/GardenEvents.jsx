
import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Events from '../../../../subcomponents/events/Events/Events'
import useGarden from '../../../../hooks/useGarden'

export default function GardenEvents() {
  const user = useSelector((globalState) => globalState.user)
  const { id } = useParams()
  const {  address,  events } = useGarden(id)

  return (
    <>
      <Events address={address} events={events} user={user} />
    </>
  )
}
