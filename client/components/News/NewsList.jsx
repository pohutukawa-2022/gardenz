import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import News from './News'

export default function NewsList({ news }) {
  const { id: gardenId } = useParams()
  const isAdmin = useSelector((globalState) => globalState.user.isAdmin)
  return (
    <>
      <h1>News</h1>
      <div className="add-event">
        {isAdmin ? (
          <Link to={`/gardens/${gardenId}/news/new`} className="inline-button">
            Add New News
          </Link>
        ) : null}
      </div>
      <ul className="list-primary">
        {news.map((news) => (
          <News news={news} key={news.id} />
        ))}
      </ul>
    </>
  )
}
