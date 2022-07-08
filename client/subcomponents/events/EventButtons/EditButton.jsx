import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function navigateEdit() {
  const navigate = useNavigate()
  const { id } = useParams()

  const navEdit = () => {
    navigate(`/admin/events/${id}/edit`)
  }
  return <button onClick={navEdit}> Edit Event</button>
}
