import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Map from '../../../../subcomponents/Map/Map'
import Events from '../../../../subcomponents/events/Events/Events'
import { getGarden } from './aboutHelper'
import OpeningHours from './OpeningHours'
import Description from './Description'
import FindUs from './FindUs'

export default function About() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)
  const location = useSelector((globalState) => globalState.location)

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  const { name, description, address, url, lat, lon, email, phone } = garden

  //TODO: hardcode in the opening hours and programmes
  return (
    <>
      <section className="w-full h-96 bg-[url('/images/galleryPlaceHolder04.jpg')] bg-cover bg-center flex justify-center items-end">
        <article className="container flex">
          <h2 className="font-sans text-white text-4xl font-bold py-6">
            {name}
          </h2>
        </article>
      </section>

      <main className="container lg:flex mx-auto mt-5">
        {/* Left Side Div */}
        <div className="container md:flex flex-col my-6 mx-10 mr-20">
          <Description name={name} description={description} />
          <OpeningHours />
        </div>
        {/* right side div */}
        <div className="flex flex-col mt-5">
          <article className=" lg:w-full h-96 my-5 lg:my-0">
            {lat && lon ? (
              <>
                <Map
                  userCoordinates={location}
                  coordinates={[{ lat: lat, lon: lon }]}
                  addresses={[address]}
                  names={[name]}
                />
              </>
            ) : null}
          </article>
          <FindUs name={name} address={address} email={email} phone={phone} />
        </div>
      </main>
    </>
  )
}
