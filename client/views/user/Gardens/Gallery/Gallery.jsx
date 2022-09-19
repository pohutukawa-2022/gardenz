import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import LightGallery from 'lightgallery/react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

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
    'https://i.pinimg.com/originals/8c/e2/ed/8ce2edd6ecb4c9ac3548f76a61cd4d1e.jpg',
    'https://i.pinimg.com/564x/75/a9/06/75a906bf8172f30705b54d22686fe232.jpg',
    'https://i.pinimg.com/originals/1d/0d/90/1d0d903fad9035dd63deebc6967b50ed.jpg',
    'https://i.pinimg.com/736x/af/04/d6/af04d6d56b725e38c90f6f7155bbce67--raised-garden-beds-raised-gardens.jpg',
    'https://i.pinimg.com/originals/8a/75/e8/8a75e8c1d60bb3c919f06bc429348235.jpg',
    'https://i.pinimg.com/736x/64/0e/9f/640e9fad34262a4e496390f02dd7d103.jpg',
    'https://i.pinimg.com/originals/e7/a0/98/e7a098f41cff2ad4eee37e5646970883.jpg',
    'https://preview.redd.it/paa70nj82oo71.jpg?auto=webp&s=1a9be8d5bc085b80ab0fa80d9cbaff28551c567a',
    'https://indie88.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-10-at-8.39.26-PM.png',
    'https://preview.redd.it/1ri9u82sklm71.jpg?auto=webp&s=0ab1ae34901093169c1df8cb8b9597b24abd54fd',
    'https://i.pinimg.com/236x/c7/26/e6/c726e61ab18dc6d9124347ec456733e4.jpg',
  ]

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="flex flex-wrap justify-center align-middle mt-14"
      >
        {images.map((image) => {
          return (
            <a
              key={image}
              href={image}
              className="inline-block w-1/5 m-2 min-w-[360px]"
            >
              <img key={image} alt="garden" src={image} />
            </a>
          )
        })}
        ...
      </LightGallery>
    </>
  )
}

export default Gallery
