import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGarden } from '../../../views/user/Gardens/about/aboutHelper'

export default function GardenHeader() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)

  useEffect(async () => {
    user.id && (await getGarden(id, user))
  }, [id, user])

  const { image, name } = garden

  return (
    <>
      <section
        className={`w-full h-96 bg-[url('${image}')] bg-cover bg-center flex justify-center items-end`}
      >
        <article className="container flex">
          <h2 className="font-sans text-white text-4xl font-bold py-6">
            {name}
          </h2>
        </article>
      </section>
    </>
  )
}
