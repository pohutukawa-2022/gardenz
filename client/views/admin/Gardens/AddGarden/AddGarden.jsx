import React from 'react'
import { useNavigate } from 'react-router-dom'

import { addGarden } from './addGardenHelper'
import GardenForm from '../../../../subcomponents/gardens/GardenForm/GardenForm'

export default function AddGarden() {
  const navigate = useNavigate()

  function submitGarden(garden) {
    addGarden(garden)
    navigate('/gardens')
  }

  const initialState = {
    name: '',
    description: '',
    address: '',
  }
  return (
    <GardenForm
      formData={initialState}
      action="Create Garden"
      submitGarden={submitGarden}
    />
  )
}
