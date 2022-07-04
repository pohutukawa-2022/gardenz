import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduce } from './addProduceHelper'
import { motion } from 'framer-motion'

import ProduceForm from '../../../subcomponents/produce/ProduceForm/ProduceForm'
import { addEventVariants } from '../../animationVariants'

export default function AddProduce() {
  const navigate = useNavigate()

  function submitEvent(event) {
    addProduce(event)
    navigate()
  }
  const initialState = {
    name: '',
    produceType: 0,
    gardenIds: [],
    inSeason: false,
  }
  return (
    <motion.div
      variants={addEventVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProduceForm
        formData={initialState}
        action="Create Event"
        submitEvent={submitEvent}
      />
    </motion.div>
  )
}
