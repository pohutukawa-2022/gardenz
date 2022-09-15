import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    <article>
      <div className="box-border relative h-432 w-343 mt-6 border-3 rounded-3xl drop-shadow-md p-3 max-w-sm bg-white  border border-black-200 ">
        <div className="rounded-full box-border bg-orange border-2 w-9 h-8 r-3">
           {news.firstName[0]}
       </div>

        <h2 className="font-sans p-1 text-lg text-center">{news.title}</h2>

          <button
          className="absolute top-3 text-lg right-4 text-gray-500 background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
          <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>

        <p className="p-1 text-gray-500	text-center">{createTime}</p>

          <div className="object-cover">
            <img
              src="https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2019/04/prepare-for-your-summer-garden-now.jpg?mw=1600"
              alt="..."
              className="shadow rounded max-w-full h-auto align-middle border-none"
            />
          </div>

        <p className="p-1 mb-6 text-gray-500">{news.content}</p>

        <button
          className="text-gray-500 text-base background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          {' '}
          <i className="fas fa-heart"></i>
        </button>
        <button
          className="text-gray-500 text-base background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fa-solid fa-share-nodes"></i>
        </button>
        <button
          className="absolute bottom-3 text-base right-1 text-gray-500 background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </article>
  )
}
