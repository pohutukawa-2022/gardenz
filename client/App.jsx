import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Header from './subcomponents/Header'
import Profile from './views/user/Profile/Profile'
import About from './views/user/Gardens/about/About'
import Home from './views/Index/Index'
import AddEvent from './views/admin/Events/AddEvent/AddEvent'
import EditEvent from './views/admin/Events/EditEvent/EditEvent'
import AddGarden from './views/admin/Gardens/AddGarden/AddGarden'
import Error from './subcomponents/Error/Error'
import Event from './views/admin/Events/Event/Event'
import Gallery from './views/user/Gardens/Gallery/Gallery'
import Gardens from './views/user/Gardens/Index/Index'
import News from './views/user/Gardens/News/News'
import AddNews from './views/admin/News/AddNews/AddNews'
import Volunteers from './views/admin/Volunteers/Volunteers'
import AddProduce from './views/admin/produce/AddProduce'
import Orders from './views/admin/Gardens/orders/Orders.jsx'
import IsUser from './subcomponents/IsUser.jsx/IsUser'
import IsAdmin from './subcomponents/IsAdmin/IsAdmin'
import { cacheUser } from './auth-utils'
import UserNav from './subcomponents/userNav/UserNav'
import GardenEvents from './views/user/Gardens/Events/GardenEvents'
import Shop from './views/user/Gardens/Shop/Shop'
import PageNotFound from './views/PageNotFound/PageNotFound'

export default function App() {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  useEffect(async () => {
    await cacheUser(isAuthenticated, getAccessTokenSilently, user)
  })

  return (
    <>
      <Error />
      <Header />
      <IsAdmin key="admin">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/gardens" element={<Gardens />} />
          <Route path="/admin/gardens/add" element={<AddGarden />} />
          <Route path="/gardens/:id/news/add" element={<AddNews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/events/:id" element={<Event />} />
          <Route path="/admin/events/add" element={<AddEvent />} />
          <Route path="/admin/events/:id/edit" element={<EditEvent />} />
          <Route path="/events/:id/volunteers" element={<Volunteers />} />
          <Route path="/produce/add" element={<AddProduce />} />
          <Route path="/admin/gardens/:id/orders" element={<Orders />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </IsAdmin>
      <IsUser key="user">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gardens" element={<Gardens />} />
          <Route
            path="/gardens/:id/news"
            element={
              <>
                <UserNav /> <News />
              </>
            }
          />
          <Route
            path="/gardens/:id/about"
            element={
              <>
                <UserNav />
                <About />
              </>
            }
          />
          <Route
            path="/gardens/:id/events"
            element={
              <>
                <UserNav />
                <GardenEvents />
              </>
            }
          />
          <Route
            path="/gardens/:id/gallery"
            element={
              <>
                <UserNav />
                <Gallery />
              </>
            }
          />
          <Route
            path="/gardens/:id/shop"
            element={
              <>
                <UserNav />
                <Shop />
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </IsUser>
    </>
  )
}
