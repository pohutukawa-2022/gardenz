import React from 'react'
import News from './News'

export default function NewsList({ news }) {
  return (
    <>
      <div className="lg: flex flex-row text-center md:text-align">
        <h1 className=" mt-12 ml-8 lg:pl-20 md:justify-center text-2xl font-serif font-bold text-darkBlue ">
          News
        </h1>
        <p className="mt-14 ml-4 text-zinc-400 font-serif">
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
