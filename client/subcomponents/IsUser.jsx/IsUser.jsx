import React from 'react'
import { useSelector } from 'react-redux'

export default function IsUser({ children }) {
  const { isAdmin } = useSelector((state) => state.user)
  return !isAdmin ? <>{children}</> : null
}
