import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

export default function UserNav() {
  const { id } = useParams()
 const style =' text-white hover:text-green block my-3 px-6 basis-1/4 '
          
  return (
    <nav>
      <div className="lg:flex flex-row text-center md:text-align bg-lightGreen">
        <NavLink
          to={`/gardens/${id}/about`}
          className={style}
        >
          About Us
        </NavLink>

        <NavLink
          to={`/gardens/${id}/events`}
          className={style}
        >
          Events
        </NavLink>

        <NavLink
          to={`/gardens/${id}/news`}
          className={style}
        >
          News
        </NavLink>

        <NavLink
          to={`/gardens/${id}/gallery`}
          className={style}
        >
          Gallery
        </NavLink>
        <NavLink
          to={`/gardens/${id}/shop`}
          className= {style}
        >
          Shop
        </NavLink>
      </div>
    </nav>
  )
}
