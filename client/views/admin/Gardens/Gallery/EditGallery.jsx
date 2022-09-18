import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// to add editGallery
//
import GardenGalleryForm from '../../../../subcomponents/gardens/GardenGalleryForm/GardenGalleryForm'

export default function EditGallery() {
  const { id } = useParams()

  function submitEvent(form) {
    console.log(form)
  }

  return (
    <GardenGalleryForm
      title="test title"
      description="description"
      urlPath="urlPath"
      id={id}
      submitEvent={submitEvent}
    />
  )
}
