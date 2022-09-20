import React from 'react'
import News from './News'

export default function NewsList({ news }) {
  return (
    <>
      <div className="lg: flex flex-row text-center md:text-align">
        <h1 className="mt-5 mb-5 ml-10 font-sans text-2xl font-bold text-center md:text-left">
          News
        </h1>
        <p className="mt-14 ml-4 text-zinc-400 font-sans">
          Keeping you updated on your community garden!
        </p>
      </div>

      <ul
        className="lg:pl-20 md:justify-center mb-36"
        aria-label="container positioning"
      >
        {news.map((news) => (
          <li
            className="inline-flex ml-8"
            key={news.id}
            aria-label="news content"
          >
            <News news={news} />
          </li>
        ))}
      </ul>
    </>
  )
}
