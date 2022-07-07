//from user/gardens/about/about.jsx

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import AdminEvents from '../../../../../subcomponents/AdminEvents/Events/Events'
import { getGarden } from './indexHelper'
import BarGraph from '../../../../../subcomponents/dataVis/BarGraph'

export default function AdminEvent() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  console.log(garden)
  const { name, description, url, events } = garden

  return (
    <>
      <section>
        <article className="container flex">
          <h2 className="font-sans text-black text-4xl font-bold py-6">
            {name}
          </h2>
        </article>
      </section>
      <main className="container lg:flex mx-auto mt-5">
        <article className="lg:w-3/4">
          <p>{description}</p>
          <p>
            Visit our site{' '}
            <a className="underline hover:underline-offset-1" href={url}>
              {url}
            </a>
          </p>
          <AdminEvents gardenid={id} events={events} />
        </article>
        <article className="w-full lg:w-1/2 h-96 my-5 lg:my-0">
          bar graph goes here...
          <BarGraph events={events} />
        </article>
      </main>
    </>
  )
}
