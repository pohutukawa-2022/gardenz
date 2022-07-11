import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function navigateAdd() {
  const navigate = useNavigate()

  const navAdd = () => {
    navigate('/admin/events/add')
  }
  return <button onClick={navAdd}> Add Event</button>
}
