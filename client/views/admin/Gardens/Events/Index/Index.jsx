import React from 'react'

import AdminEvents from '../../../../../subcomponents/AdminEvents/Events/Events'
import useGarden from '../../../../../hooks/useGarden'
import BarGraph from '../../../../../subcomponents/dataVis/BarGraph'

export default function AdminEvent() {
  const garden = useGarden()
  const { address, events } = garden

  return (
    <>
      <main className="container lg:flex mx-auto mt-5">
        <article className="lg:w-3/4">
          <AdminEvents address={address} events={events} />
        </article>
        <article className="w-full lg:w-1/2 h-96 my-5 lg:my-0">
          Sweet as bar graph:
          <BarGraph events={events} />
        </article>
      </main>
    </>
  )
}
