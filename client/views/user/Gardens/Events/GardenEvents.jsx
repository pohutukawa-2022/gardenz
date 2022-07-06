import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getGarden } from '../about/aboutHelper'
import Events from '../../../../subcomponents/events/Events/Events'

export default function GardenEvents() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)
  const { name, events } = garden

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  console.log(user)
  return (
    <>
      <section className="w-full h-96 bg-[url('/images/galleryPlaceHolder04.jpg')] bg-cover bg-center flex justify-center items-end">
        <article className="container flex">
          <h2 className="font-sans text-white text-4xl font-bold py-6">
            {name}
          </h2>
          <Events gardenid={id} events={events} />
        </article>
      </section>
    </>
  )
}
