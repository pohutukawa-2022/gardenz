import React from 'react'
import { useParams } from 'react-router-dom'

import OpeningHours from './OpeningHours'
import Description from './Description'
import FindUs from './FindUs'
import MapImage from './MapImage'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function About() {
  const { id } = useParams()
  const { name, description, address, lat, lon, email, phone, imageHeaderUrl } =
    useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <main className="container lg:flex mx-auto mt-5">
        {/* Left Side Div */}
        <div className="container md:flex flex-col my-6 mx-10 mr-20">
          <Description name={name} description={description} />
          <OpeningHours />
        </div>
        {/* Right Side Div */}
        <div className="flex flex-col mt-5">
          <MapImage
            lat={lat}
            lon={lon}
            name={name}
            address={address}
            location={location}
          />
          <FindUs name={name} address={address} email={email} phone={phone} />
        </div>
      </main>
    </>
  )
}
