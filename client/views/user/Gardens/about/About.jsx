import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getGarden } from './aboutHelper'
import OpeningHours from './OpeningHours'
import Description from './Description'
import FindUs from './FindUs'
import MapImage from './MapImage'

export default function About() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)

  useEffect(() => {
    getGarden(id, user)
  }, [id, user])

  const { name, description, address, lat, lon, email, phone } = garden

  return (
    <>
      <main className="container lg:flex mx-auto mt-5">
        {/* Left Side Div */}
        <div className="container md:flex flex-col my-6 mx-10 mr-20">
          <Description name={name} description={description} />
          <OpeningHours />
        </div>
        {/* Right Side Div */}
        <div className="flex flex-col mt-5">
          <MapImage lat={lat} lon={lon} name={name} address={address} />
          <FindUs name={name} address={address} email={email} phone={phone} />
        </div>
      </main>
    </>
  )
}
