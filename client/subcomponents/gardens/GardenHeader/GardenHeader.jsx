import React from 'react'
import { useParams } from 'react-router-dom'
import useGarden from '../../../hooks/useGarden'

export default function GardenHeader() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  return (
    <section
      className={`w-full h-48 bg-cover bg-center flex justify-center items-end`}
      style={{ backgroundImage: `url('${imageHeaderUrl}')` }}
    >
      <article className="container flex">
        <h2 className="font-sans text-white text-4xl font-bold py-6">{name}</h2>
      </article>
    </section>
  )
}
