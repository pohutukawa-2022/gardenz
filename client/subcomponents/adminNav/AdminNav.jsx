import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  const id = 1
  return (
    <>
      <h1>this is the admin nav</h1>
      <div>
        <Link to="/produce/add"> add produce list</Link>
        <Link to={`admin/events/${id}`}> Events </Link>
      </div>
    </>
  )
}

export default AdminNav
