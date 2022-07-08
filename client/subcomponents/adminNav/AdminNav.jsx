import React from 'react'
import { Link, useParams } from 'react-router-dom'
//import { useSelector } from 'react-redux'
function AdminNav() {
  const { id } = useParams()

  console.log(id)

  //const id = useSelector((state) => state.gardenId)
  //const id = 1
  return (
    <>
      <nav className=" py-2 text-center bg-orange">
        <div className="lg:flex justify-between md:text-align text-white ">
          <div className="pl-4">
            <Link to={`/admin/gardens/${id}/produce`}>Update Produce List</Link>
          </div>
          <div>
            <Link to={`/admin/events/${id}`}> Add/Edit Events </Link>
          </div>
          <div>
            <Link to={`/gardens/${id}/news/add`}>Post News </Link>
          </div>
          <div>
            <Link to={`/events/${id}/volunteers`}>Update Gallery </Link>
          </div>
          <div>
            <Link to={`/events/${id}/volunteers`}>Manage Order </Link>
          </div>
          <div className="pr-4">
            <Link to={`/admin/gardens`}>Change Garden </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminNav
