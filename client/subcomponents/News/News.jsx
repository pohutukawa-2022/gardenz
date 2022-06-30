import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    <>
      <li>
        <h2>
          By {news.firstName} {news.lastName}:
        </h2>
      </li>
      <li>{news.content}</li>
      <li>{createTime}</li>
    </>
  )
}
