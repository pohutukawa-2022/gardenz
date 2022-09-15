import React from 'react'

export default function News({ news }) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const today = new Date()
  const createTime = today.getFullYear()
  const createDate = monthNames[today.getMonth()]
  console.log(today)
  const getDay = today.getDate()

  // TODO: situate first name inline with news title and date
  return (
    <article>
      <div className="flex flex-row">
        <div className="box-border relative h-432 w-343 mt-6 border-3 rounded-3xl drop-shadow-md p-3 max-w-sm bg-white  border border-black-200 ">
          <div className="content-start">
            <div className="flex flex">
              <div className="text-white fixed top-4 text-center text-xl rounded-full box-border border border-orange bg-orange border-2 w-10 h-10 r-3">
                {news.firstName[0]}
              </div>
              <div className="">
                <h2 className="font-sans p-1 text-lg ml-12 -mb-3">
                  {news.title}
                </h2>
                  <p className="p-1 text-sm ml-12 text-gray-500 ">{`${createDate} ${getDay},${createTime}`}</p>
              </div>

              <div>
                <button className="absolute top-4 text-xl right-4 text-gray-500 background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="object-cover">
            <img
              src="https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2019/04/prepare-for-your-summer-garden-now.jpg?mw=1600"
              alt="..."
              className="shadow object-cover rounded max-w-full h-auto align-middle border-none"
            />
          </div>

          <p className="p-1 mb-6 text-sm text-gray-500">{news.content}</p>

          <button
            className="text-gray-500 text-xl background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            {' '}
            <i className="fas fa-heart"></i>
          </button>
          <button
            className="text-gray-500 text-xl background-transparent font-bold uppercase px-1 pt-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
      </div>
    </article>
  )
}
