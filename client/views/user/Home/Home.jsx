import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserLocation, getGardenLocations } from './homeHelper'

export default function Home() {
  const [, setUserCoordinates] = useState(null)
  const [, setGardensCoordinates] = useState([])
  const [, setAddresses] = useState([])
  const [, setNames] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getGardenLocations().then(({ gardenCoords, addrs, names }) => {
      setGardensCoordinates(gardenCoords)
      setAddresses(addrs)
      setNames(names)
      return null
    })
  }, [])

  useEffect(() => {
    let mounted = true

    function isMounted() {
      return mounted
    }

    getUserLocation((location) => {
      setUserCoordinates(location)
    }, isMounted)

    // you can return a "clean up" function from useEffect - this runs when
    // the component unmounts
    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="container flex mx-auto">
      <section className="w:full md:w-1/2 md:mt-5 px-5 lg:px-20 py-5 lg:py-24 rounded-l-md bg-slate-100">
        <h1 className="text-5xl leading-tight font-serif">
          Empowering{' '}
          <span className="w-full block text-blue">Community Gardens</span> in
          New Zealand
        </h1>
        <p className="text-2xl my-10">
          Help your community get the most out of your garden with events and
          reporting and become eligible for government subsidies
        </p>
        <Link
          to="/gardens"
          className="w-1/2 block p-3 text-center rounded-md text-white bg-darkGreen transition ease-in-out hover:bg-blue hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300"
        >
          Get Started
        </Link>
      </section>
      <img
        className="hidden md:block w-1/2 mt-5 rounded-r-md"
        src="/images/comGardenPlant.png"
        initial="hidden"
      />
    </main>
  )
}
