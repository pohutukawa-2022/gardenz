import React from 'react'
import { Link, useParams } from 'react-router-dom'

function AdminNav() {
  const { id } = useParams()

  return (
    <>
      <nav>
        <nav className=" py-2 text-center bg-orange">
          <ul className="lg:flex justify-between md:text-align text-white ">
            <li className="pl-4">
              <Link to={`/admin/produce/add`}>Update Produce List</Link>
            </li>
            <li>
              <Link to={`/admin/gardens/${id}/events`}> Add/Edit Events </Link>
            </li>
            <li>
              <Link to={`/admin/gardens/${id}/news/add`}>Post News </Link>
            </li>
            <li>
              <Link to={`/admin/gardens/${id}/gallery`}>Update Gallery </Link>
            </li>
            <li>
              <Link to={`/admin/gardens/${id}/orders`}>Manage Order </Link>
            </li>
            <li className="pr-4">
              <Link to={`/`}>Change Garden </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  )
}

export default AdminNav
