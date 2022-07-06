//from user/gardens/about/about.jsx

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// import Map from '../../../../subcomponents/Map/Map'
import Events from '../../../../../subcomponents/events/Events/Events'
import { getGarden } from './indexHelper'
// import BarGraph from '../../../../../subcomponents/dataVis/BarGraph'
// import { getGarden } from './aboutHelper'

export default function AdminEvent() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)
  const location = useSelector((globalState) => globalState.location)

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  const { name, description, url, events } = garden

  return (
    <>
      {/* <section className="w-full h-96 bg-[url('/images/galleryPlaceHolder04.jpg')] bg-cover bg-center flex justify-center items-end">
        <article className="container flex">
          <h2 className="font-sans text-white text-4xl font-bold py-6">
            {name}
          </h2>
          {console.log(name, 'asd')}
        </article>
      </section> */}
      <main className="container lg:flex mx-auto mt-5">
        <article className="lg:w-1/2">
          <p>{description}</p>
          <p>
            Visit our site{' '}
            <a className="underline hover:underline-offset-1" href={url}>
              {url}
            </a>
          </p>
          <Events gardenid={id} events={events} />
        </article>
        <article className="w-full lg:w-1/2 h-96 my-5 lg:my-0">
          {/* <BarGraph /> */}
        </article>
      </main>
    </>
  )
}
