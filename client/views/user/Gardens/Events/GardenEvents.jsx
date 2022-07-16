import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getGarden } from '../about/aboutHelper'
import Events from '../../../../subcomponents/events/Events/Events'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'

export default function GardenEvents() {
  const { id } = useParams()

  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)
  const { name, address, imageHeaderUrl, events } = garden

  useEffect(() => {
    getGarden(id, user)
  }, [id])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <main className="container lg:flex mx-auto mt-5">
        <article className="lg:w-1/2">
          <Events address={address} events={events} />
        </article>
      </main>
    </>
  )
}
