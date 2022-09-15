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

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <div className="flex">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href="https://thumbs.dreamstime.com/z/people-garden-7368492.jpg">
            <img
              alt="img1"
              src="https://thumbs.dreamstime.com/z/people-garden-7368492.jpg"
            />
          </a>
          <a href="https://thumbs.dreamstime.com/z/gardening-people-concept-happy-senior-woman-lawn-rake-working-summer-garden-senior-woman-lawn-rake-working-120566241.jpg">
            <img
              alt="img2"
              src="https://thumbs.dreamstime.com/z/gardening-people-concept-happy-senior-woman-lawn-rake-working-summer-garden-senior-woman-lawn-rake-working-120566241.jpg"
            />
          </a>
          ...
        </LightGallery>
      </div>
    </>
  )
}

export default Gallery
