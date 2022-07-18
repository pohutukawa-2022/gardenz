import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNews } from './newsHelper'

import NewsList from '../../../../subcomponents/News/NewsList'
import { useDispatch } from 'react-redux'
import { showError } from '../../../../slices/error'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

export default function News() {
  const { id } = useParams()
  const [news, setNews] = useState([])
  const { name, imageHeaderUrl } = useGarden()
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
      <GardenHeader name={name} url={imageHeaderUrl} />
      <NewsList news={news} />
    </>
  )
}
