import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Menu() {
  const { id } = useParams()
  return (
    <section className="container flex mx-auto">
      <ul className="w-full grid grid-cols-2 gap-4 mt-20">
        <li className="grid">
          <Link
            to={`/admin/produce/add`}
            className="p-6 text-center rounded-md border-2 border-blue  transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Update Produce List</h2>
          </Link>
        </li>
        <li className="grid">
          <Link
            to={`/admin/gardens/${id}/events`}
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Add/Edit Events</h2>
          </Link>
        </li>{' '}
        <li className="grid">
          <Link
            to={`/admin/gardens/${id}/news`}
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Post News</h2>
          </Link>
        </li>{' '}
        <li className="grid">
          <Link
            to={`/admin/gardens/${id}/gallery`}
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Update Gallery</h2>
          </Link>
        </li>{' '}
        <li className="grid">
          <Link
            to={`/admin/gardens/${id}/orders`}
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Manage Orders</h2>
          </Link>
        </li>{' '}
        <li className="grid">
          <Link
            to={`/`}
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Change Garden</h2>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu
