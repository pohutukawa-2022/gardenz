import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth-utils'

// React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout({
      returnTo: window.location.origin,
    })
  }

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <nav
        className={
          open
            ? 'block'
            : 'hidden ' +
              'w-full lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <div className="lg:flex text-center md:text-align">
          <Link
            to="/"
            className="text-white hover:text-green block my-6 py-2 px-6"
          >
            Home
          </Link>

          <IfAuthenticated>
            <a
              href="/"
              onClick={handleLogoff}
              className="text-white hover:text-green block my-6 py-2 px-6"
            >
              Log out
            </a>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <a
              href="/"
              onClick={handleLogin}
              className="text-white hover:text-green block my-6 py-2 px-6"
            >
              Sign in
            </a>
            <a
              href="/"
              onClick={handleRegister}
              className="text-white hover:text-green block my-6 py-2 px-6"
            >
              Register
            </a>
          </IfNotAuthenticated>
        </div>
      </nav>
      <div
        className="lg:hidden z-90 absolute top-4 right-6 text-white text-4xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  )
}
