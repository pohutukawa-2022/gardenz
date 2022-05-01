import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNews } from './newsHelper'

import NewsList from '../../components/News/NewsList'

export default function News() {
  const { id } = useParams()
  const [news, setNews] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getNews(id).then((news) => {
      setNews(news)
      return null
    })
  }, [])

  return <NewsList news={news} />
}
