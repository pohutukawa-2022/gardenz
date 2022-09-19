import React from 'react'
import { Link, useParams } from 'react-router-dom'

function AdminNav() {
  const { gardenId } = useParams()

  return (
    <nav className=" py-2 text-center bg-orange px-4">
      <ul className="lg:flex justify-between md:text-align text-white ">
        <li>
          <Link to={`/admin/gardens/${gardenId}/cover`}>Update Cover</Link>
        </li>
        <li>
          <Link to={`/admin/gardens/${gardenId}/events`}>Add/Edit Events</Link>
        </li>
        <li>
          <Link to={`/admin/gardens/${gardenId}/news/add`}>Post News</Link>
        </li>
        <li>
          <Link to={`/admin/gardens/${gardenId}/gallery`}>Update Gallery</Link>
        </li>
        <li>
          <Link to={`/admin/gardens/${gardenId}/orders`}>Manage Order</Link>
        </li>
        <li>
          <Link to={`/admin/gardens/${gardenId}/volunteers`}>Volunteers</Link>
        </li>
        <li className="pr-4">
          <Link to="/admin/gardens">Change Garden</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
