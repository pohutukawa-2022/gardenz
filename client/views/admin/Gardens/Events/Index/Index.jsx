//from user/gardens/about/about.jsx

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import AdminEvents from '../../../../../subcomponents/AdminEvents/Events/Events'
import { getGarden } from './indexHelper'
import BarGraph from '../../../../../subcomponents/dataVis/BarGraph'
import AdminNav from '../../../../../subcomponents/adminNav/AdminNav'
export default function AdminEvent() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  const { address, events } = garden

  return (
    <>
      <AdminNav />
      <section>
        <article className="container flex">
          <h2 className="font-sans text-black text-4xl font-bold py-6"></h2>
        </article>
      </section>
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
