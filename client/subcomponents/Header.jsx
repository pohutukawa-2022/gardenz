import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav/Nav'
import WaitIndicator from './WaitIndicator/WaitIndicator'

export default function Header() {
  return (
    <header className="w-full bg-lightGreen">
      <section className="container flex items-center justify-between flex-wrap mx-auto">
        <Link to="/">
          <img
            src="/images/gardenzLogoNew.svg"
            alt="gardenzlogo"
            className="logo"
          />
        </Link>
        <WaitIndicator />
        <Nav />
      </section>
    </header>
  )
}
