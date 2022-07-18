import React from 'react'
import Map from '../../../../subcomponents/Map/Map'

const MapImage = ({ lat, lon, name, address, location }) => {
  return (
    <article className=" lg:w-full h-96 my-5 mb-10">
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
  )
}

export default MapImage
