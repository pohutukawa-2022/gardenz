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
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <News news={news} />
          </li>
        ))}
      </ul>
    </>
  )
}

// position: absolute;
// left: 9.24%;
// right: 57.92%;
// top: 34.79%;
// bottom: 62.87%;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 24px;
// line-height: 28px;

// color: #172450;
