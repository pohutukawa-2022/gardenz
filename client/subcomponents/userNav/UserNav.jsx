import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//import { useSelector } from 'react-redux'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function userNav() {
  const [open, setOpen] = useState(false)
  const params = useParams()
  const gardenId = params.id

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

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
      <div
        className="lg:hidden z-90 absolute top-4 right-6 text-white text-4xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  )
}
