import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav/Nav'

export default function Header() {
  return (
    <header className="w-full bg-lightGreen">
      <section className="container lg:flex items-center justify-between mx-auto">
        <Link to="/">
          <img
            src="/images/gardenzLogoNew.svg"
            alt="gardenzlogo"
            className="w-60"
          />
        </Link>
        <Nav />
      </section>
    </header>
  )
}
