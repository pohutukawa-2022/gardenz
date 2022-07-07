import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

export default function UserNav() {
  const { id } = useParams()

  return (
    <>
      <nav>
        <div className="lg:flex flex-row text-center md:text-align bg-lightGreen">
          <NavLink
            to={`/gardens/${id}/about`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6  py-2 px-6 basis-1/4 '
            }
          >
            About Us
          </NavLink>

          <NavLink
            to={`/gardens/${id}/events`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6  py-2 px-6 basis-1/4  '
            }
          >
            Events
          </NavLink>

          <NavLink
            to={`/gardens/${id}/news`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 basis-1/4 '
            }
          >
            News
          </NavLink>

          <NavLink
            to={`/gardens/${id}/gallery`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6  py-2 px-6 basis-1/4 '
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to={`/gardens/${id}/shop`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6  py-2 px-6 basis-1/4 '
            }
          >
            Shop
          </NavLink>
        </div>
      </nav>
    </>
  )
}
