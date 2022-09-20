import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNews } from './newsHelper'

import NewsList from '../../../../subcomponents/News/NewsList'
import { useDispatch } from 'react-redux'
import { showError } from '../../../../slices/error'

export default function News() {
  const { id } = useParams()
  const [news, setNews] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getNews(id)
      .then((news) => {
        setNews(news)
        return null
      })
      .catch((error) => {
        dispatch(showError(error))
      })
  }, [id])

  return (
    <>
      <NewsList news={news} />
    </>
  )
}
