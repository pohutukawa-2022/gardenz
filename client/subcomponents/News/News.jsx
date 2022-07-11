import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    <article>
      <h2>{news.title}</h2>
      <h2>
        By {news.firstName} {news.lastName}:
      </h2>
      <p>{news.content}</p>
      <p>{createTime}</p>
    </article>
  )
}
