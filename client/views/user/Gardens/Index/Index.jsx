import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllGardens } from './IndexHelper'
import { showError } from '../../../../slices/error'

export default function GardensList() {
  const [gardenList, setGardenList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getAllGardens()
      .then((gardens) => {
        setGardenList(gardens)
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
        return false
      })
  }, [])

  return (
    <section className="container flex mx-auto">
      <ul className="w-full grid grid-cols-4 gap-4 mt-20">
        {gardenList.map((garden) => {
          return (
            <li key={garden.id} className="grid">
              <Link
                to={`/gardens/${garden.id}/about`}
                className="p-6 text-center rounded-md border-2 border-blue hover:bg-blue hover:text-white transition ease-in-out hover:bg-blue hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
              >
                <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
                <h2 className="font-sans text-2xl">{garden.name}</h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
