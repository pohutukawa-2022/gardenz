import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { AnimatePresence } from 'framer-motion'

import Header from './subcomponents/Header'
import Profile from './views/user/Profile/Profile'
import Garden from './views/user/Garden/Garden'
import Home from './views/user/Home/Home'
import AddEvent from './views/admin/AddEvent/AddEvent'
import EditEvent from './views/admin/EditEvent/EditEvent'
import AddGarden from './views/admin/AddGarden/AddGarden'
import Error from './subcomponents/Error/Error'
import Event from './views/admin/Event/Event'
import Gardens from './views/user/GardensList/GardensList'
import News from './views/user/News/News'
import AddNews from './views/admin/AddNews/AddNews'
import Volunteers from './views/user/Volunteers/Volunteers'
import AddProduce from './views/admin/produce/AddProduce'
import IsUser from './subcomponents/IsUser.jsx/IsUser'
import IsAdmin from './subcomponents/IsAdmin/IsAdmin'
import { cacheUser } from './auth-utils'

export default function App() {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  useEffect(async () => {
    await cacheUser(isAuthenticated, getAccessTokenSilently, user)
  })

  return (
    <>
      <Error />
      <Header />
      <IsAdmin>
        <p>this is admin</p>
      </IsAdmin>
      <IsUser>
        <p>this is user</p>
      </IsUser>
      <main className="container margin-container flex-container centre-flex">
        <AnimatePresence exitBeforeEnter>
          <IsAdmin>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gardens" element={<Gardens />} />
              <Route path="/gardens/new" element={<AddGarden />} />
              <Route path="/gardens/:id" element={<Garden />} />
              <Route path="/gardens/:id/news" element={<News />} />
              <Route path="/gardens/:id/news/new" element={<AddNews />} />
              <Route path="/gardens/:id/events/:eventId" element={<Event />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/event/new" element={<AddEvent />} />
              <Route path="/events/:id/edit" element={<EditEvent />} />
              <Route path="/events/:id/volunteers" element={<Volunteers />} />
              <Route path="/produce/new" element={<AddProduce />} />
            </Routes>
          </IsAdmin>
          <IsUser>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gardens" element={<Gardens />} />
              <Route path="/gardens/:id" element={<Garden />} />
              <Route path="/gardens/:id/news" element={<News />} />
              <Route path="/gardens/:id/events/:eventId" element={<Event />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </IsUser>
        </AnimatePresence>
      </main>
    </>
  )
}
