import React from 'react'
import { Link } from 'react-router-dom'

function AddEvent() {
  return (
    <Link
      to="/admin/events/add"
      className="block w-32 mt-5 p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
    >
      Add Event
    </Link>
  )
}

export default AddEvent
