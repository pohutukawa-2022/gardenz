import React from 'react'
import { Link, useParams } from 'react-router-dom'

function AdminNav() {
  const { id } = useParams()

  return (
    <>
      <div>
        <nav className=" py-2 text-center bg-orange">
          <ul className="lg:flex justify-between md:text-align text-white ">
            <li className="pl-4">
              <Link to={`/product/add`}>Update Produce List</Link>
            </li>
            <li>
              <Link to={`/admin/events/${id}`}> Add/Edit Events </Link>
            </li>
            <li>
              <Link to={`/gardens/${id}/news/add`}>Post News </Link>
            </li>
            <li>
              <Link to={`/events/${id}/volunteers`}>Update Gallery </Link>
            </li>
            <li>
              <Link to={`/events/${id}/volunteers`}>Manage Order </Link>
            </li>
            <li className="pr-4">
              <Link to={`/admin/gardens`}>Change Garden </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default AdminNav
