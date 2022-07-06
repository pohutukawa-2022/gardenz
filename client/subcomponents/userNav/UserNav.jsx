import React from 'react'
import { Link } from 'react-router-dom'

export default function userNav() {
  return (
    <>
      <Link to="/gardens/:id/about"> About Us </Link>
      <Link to="/gardens/:id/events"> Events </Link>
      <Link to="/gardens/:id/news"> News </Link>
      <Link to="/gardens/:id/gallery"> Gallery </Link>
      <Link to="/gardens/:id/shop"> Shop </Link>
    </>
  )
}
