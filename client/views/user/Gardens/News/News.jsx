import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNews } from './newsHelper'

import NewsList from '../../../../subcomponents/News/NewsList'
import { useDispatch, useSelector } from 'react-redux'
import { showError } from '../../../../slices/error'
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import { getGarden } from '../about/aboutHelper'

export default function News() {
  const { id } = useParams()
  const [news, setNews] = useState([])
  const garden = useSelector((globalState) => globalState.garden)
  const { name, imageHeaderUrl } = garden
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

  useEffect(() => {
    getGarden(id)
  }, [id])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <NewsList news={news} />
    </>
  )
}
