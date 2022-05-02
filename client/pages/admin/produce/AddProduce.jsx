import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduce } from './addProduceHelper'
import { motion } from 'framer-motion'

import ProduceForm from '../../../components/produce/ProduceForm/ProduceForm'
import { addEventVariants } from '../../animationVariants'

export default function AddProduce() {
  const navigate = useNavigate()

  function submitEvent(event) {
    addProduce(event)
    navigate()
  }
  const initialState = {
    name: '',
    // date: '',
    // volunteersNeeded: 0,
    // description: '',
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
