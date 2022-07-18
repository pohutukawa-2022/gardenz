import React from 'react'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

function Gallery() {
  const { name, imageHeaderUrl } = useGarden()

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <section>
        <p> hi, this is the gallery</p>
        <img src="/images/comGardenPlant.png" alt="garden image1" />
        <img src="/images/comGardenRows.png" alt="garden image2" />
      </section>
    </>
  )
}

export default Gallery
