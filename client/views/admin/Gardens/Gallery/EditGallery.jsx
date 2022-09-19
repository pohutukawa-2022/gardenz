import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateGalleryImage, getGalleryImage } from './EditGalleryHelper'

import GardenGalleryForm from '../../../../subcomponents/gardens/GardenGalleryForm/GardenGalleryForm'

export default function EditGallery() {
  const { id, imageId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  function submitEvent(form) {
    form.id = imageId
    updateGalleryImage({ gardenId: id, ...form }, navigate)
  }
  useEffect(async () => {
    let data = await getGalleryImage(id, imageId)
    setFormData(data[0])
  }, [])

  return (
    <GardenGalleryForm
      name={formData.name}
      description={formData.description}
      url={formData.url}
      id={id}
      submitEvent={submitEvent}
    />
  )
}
