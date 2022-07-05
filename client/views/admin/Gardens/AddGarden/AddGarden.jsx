import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addGarden } from './addGardenHelper'
import { motion } from 'framer-motion'

import GardenForm from '../../../../subcomponents/gardens/GardenForm/GardenForm'
import { addEventVariants } from '../../../animationVariants'

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
    <motion.div
      variants={addEventVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <GardenForm
        formData={initialState}
        action="Create Garden"
        submitGarden={submitGarden}
      />
    </motion.div>
  )
}
