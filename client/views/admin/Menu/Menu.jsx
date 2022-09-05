import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <section className="container flex mx-auto">
      <ul className="w-full grid grid-cols-2 gap-4 mt-20">
        <li className="grid">
          <Link
            to='/admin/gardens'
            className="p-6 text-center rounded-md border-2 border-blue  transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Manage a Garden</h2>
          </Link>
        </li>
        <li className="grid">
          <Link
            to='/admin/produce/add'
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Manage Produce</h2>
          </Link>
        </li>{' '}
        <li className="grid">
          <Link
            to='/admin/gardens/add'
            className="p-6 text-center rounded-md border-2 border-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
          >
            <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
            <h2 className="font-sans text-2xl">Add a Garden</h2>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu
