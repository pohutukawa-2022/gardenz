import React from 'react'
import News from './News'

export default function NewsList({ news }) {
  return (
    <>
      <div className="lg: flex flex-row text-center md:text-align">
        <h1 className=" mt-12 ml-8 pl-20 text-2xl font-serif font-bold text-darkBlue ">
          News
        </h1>
        <p className="mt-14 ml-4 text-zinc-400 font-serif">
          Keeping you updated on your community garden!
        </p>
      </div>

      <ul className="pl-20">
        {news.map((news) => (
          <li className="inline-flex ml-8" key={news.id}>
            <News news={news} />
          </li>
        ))}
      </ul>
    </>
  )
}
