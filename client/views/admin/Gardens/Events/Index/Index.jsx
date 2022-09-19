import React from 'react'
import { useParams } from 'react-router-dom'

import AdminEvents from '../../../../../subcomponents/AdminEvents/Events/Events'
import useGarden from '../../../../../hooks/useGarden'
import BarGraph from '../../../../../subcomponents/dataVis/BarGraph'

export default function AdminEvent() {
  const { id } = useParams()
  const garden = useGarden(id)
  const { address, events } = garden

  return (
    <>
      <main className="container lg:flex mx-auto mt-5">
        <article className="lg:w-3/4">
          <AdminEvents address={address} events={events} />
        </article>
        <article className="w-full lg:w-1/2 h-96 mt-5 lg:my-0 bg-gray-300">
          Volunteers by event date for this year:
          <BarGraph events={events} />
        </article>
      </main>
    </>
  )
}
