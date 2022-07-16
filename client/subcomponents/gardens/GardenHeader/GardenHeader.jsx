import React from 'react'

export default function GardenHeader({ name, url }) {
  return (
    <section
      className={`w-full h-48 bg-cover bg-center flex justify-center items-end`}
      style={{ backgroundImage: `url('${url}')` }}
    >
      <article className="container flex">
        <h2 className="font-sans text-white text-4xl font-bold py-6">{name}</h2>
      </article>
    </section>
  )
}
