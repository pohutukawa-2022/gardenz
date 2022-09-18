import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateGalleryImage } from './EditGalleryHelper'
// to add editGallery
//
import GardenGalleryForm from '../../../../subcomponents/gardens/GardenGalleryForm/GardenGalleryForm'

export default function EditGallery() {
  const { id } = useParams()
  const navigate = useNavigate()

  function submitEvent(form) {
    updateGalleryImage({ id, ...form }, navigate)
  }

  return (
    <GardenGalleryForm
      name="test title name"
      description="description"
      url="url"
      id={id}
      submitEvent={submitEvent}
    />
  )
}

// in the db we have
// id, name, url, garden_id, and description
