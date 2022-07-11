import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function navigateEdit({ eventId }) {
  const navigate = useNavigate()

  const navEdit = () => {
    navigate(`/admin/events/${eventId}/edit`)
  }
  return <button onClick={navEdit}> Edit Event</button>
}
