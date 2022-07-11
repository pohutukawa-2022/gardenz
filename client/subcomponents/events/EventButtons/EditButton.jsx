import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function navigateEdit({ eventId }) {
  const navigate = useNavigate()

  const navEdit = () => {
    navigate(`/admin/events/${eventId}/edit`)
  }
  return (
    <button
      className="w-full block mt-5 p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={navEdit}
    >
      {' '}
      Edit Event
    </button>
  )
}
