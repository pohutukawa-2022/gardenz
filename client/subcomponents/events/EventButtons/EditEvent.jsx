import React from 'react'
import { Link } from 'react-router-dom'

function EditEvent({ gardenId, eventId }) {
  return (
    <Link
      className="w-full block mt-5 p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
      to={`/admin/gardens/${gardenId}/events/${eventId}/edit`}
    >
      Edit Event
    </Link>
  )
}

export default EditEvent
