import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  const images = [
    'https://thumbs.dreamstime.com/z/people-garden-7368492.jpg',
    'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://thumbs.dreamstime.com/z/gardening-people-concept-happy-senior-woman-lawn-rake-working-summer-garden-senior-woman-lawn-rake-working-120566241.jpg',
  ]

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="flex justify-center align-middle"
      >
        {images.map((image) => {
          return (
            <a key={image} href={image} className="inline-block w-1/5 m-5">
              <img key={image} alt="from Garden" src={image} />
            </a>
          )
        })}
        ...
      </LightGallery>
    </>
  )
}

export default Gallery
