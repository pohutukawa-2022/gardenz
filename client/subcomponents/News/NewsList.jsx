import React from 'react'
import News from './News'

export default function NewsList({ news }) {
  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map((news) => (
          <News news={news} key={news.id} />
        ))}
      </ul>
    </>
  )
}
