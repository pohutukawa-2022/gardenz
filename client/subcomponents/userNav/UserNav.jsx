import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
//import { useSelector } from 'react-redux'

// import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoClose } from 'react-icons/io5'

export default function userNav() {
  //const [open, setOpen] = useState(false)
  const params = useParams()
  const gardenId = params.id
  //const [isActive, setIsActive] = useState('text-white')

  //const activeLink = () => {
  //   setIsActive('text-orange')
  // }

  // const toggleMenu = () => {
  //   setOpen((prev) => !prev)
  // }

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
        <div className="lg:flex text-center md:text-align bg-lightGreen">
          <NavLink
            to={`/gardens/${gardenId}/about`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 '
            }
          >
            About Us
          </NavLink>

          <NavLink
            to={`/gardens/${gardenId}/events`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 '
            }
          >
            Events
          </NavLink>

          <NavLink
            to={`/gardens/${gardenId}/news`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 '
            }
          >
            News
          </NavLink>

          <NavLink
            to={`/gardens/${gardenId}/gallery`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 '
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to={`/gardens/${gardenId}/shop`}
            className={({ isActive }) =>
              (isActive ? 'text-orange' : 'text-white') +
              ' hover:text-green block my-6 py-2 px-6 '
            }
          >
            Shop
          </NavLink>
        </div>
      </nav>
      {/* <div
        className="lg:hidden z-90 absolute top-4 right-6 text-white text-4xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div> */}
    </>
  )
}
