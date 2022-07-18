import React from 'react'
import { useNavigate } from 'react-router-dom'

import { addNews } from './addNewsHelper'
import NewsForm from '../../../../subcomponents/News/NewsForm/NewsForm'

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
    <NewsForm
      formData={initialState}
      action="Create News"
      submitNews={submitNews}
    />
  )
}
