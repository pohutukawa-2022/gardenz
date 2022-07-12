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

  const { image: headerImage, name } = garden

  return (
    <>
      <figure>
        <img
          className="object-cover h-52 w-full"
          src={headerImage}
          alt={name}
        />
      </figure>
    </>
  )
}
