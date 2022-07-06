import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function userNav() {
  const gardenId = useSelector((globalState) => globalState.user?.gardenId)
  return (
    <>
      <nav
        className={
          open
            ? 'block'
            : 'hidden ' +
              'w-full lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <div className="lg:flex text-center md:text-align bg-lightGreen">
          <Link
            to={`/gardens/${gardenId}/about`}
            className="text-white hover:text-green block my-6 py-2 px-6 "
          >
            About Us
          </Link>

          <Link
            to={`/gardens/${gardenId}/events`}
            className="text-white hover:text-green block my-6 py-2 px-6"
          >
            Events
          </Link>

          <Link
            to={`/gardens/${gardenId}/news`}
            className="text-white hover:text-green block my-6 py-2 px-6"
          >
            News
          </Link>

          <Link
            to={`/gardens/${gardenId}/gallery`}
            className="text-white hover:text-green block my-6 py-2 px-6"
          >
            Gallery
          </Link>
          <Link
            to={`/gardens/${gardenId}/shop`}
            className="text-white hover:text-green block my-6 py-2 px-6"
          >
            Shop
          </Link>
        </div>
      </nav>
    </>
  )
}
