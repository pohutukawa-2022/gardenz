import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addNews } from './addNewsHelper'
import { motion } from 'framer-motion'

import NewsForm from '../../../../subcomponents/News/NewsForm/NewsForm' //Change
import { addEventVariants } from '../../../animationVariants'

export default function AddNews() {
  const navigate = useNavigate()

  function submitNews(news) {
    addNews(news, navigate)
  }

  const initialState = {
    title: '',
    content: '',
  }

  return (
    <motion.div
      variants={addEventVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NewsForm
        formData={initialState}
        action="Create News"
        submitNews={submitNews}
      />
    </motion.div>
  )
}
