import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IsUser from '../subcomponents/IsUser/IsUser'
import UserNav from '../subcomponents/userNav/UserNav'
import Home from '../views/Index/Index'
import PageNotFound from '../views/PageNotFound/PageNotFound'
import About from '../views/user/Gardens/about/About'
import GardenEvents from '../views/user/Gardens/Events/GardenEvents'
import Gallery from '../views/user/Gardens/Gallery/Gallery'
import GardensList from '../views/user/Gardens/Index/Index'
import News from '../views/user/Gardens/News/News'
import Shop from '../views/user/Gardens/Shop/Shop'
import Profile from '../views/user/Profile/Profile'
import Delivery from '../views/user/Gardens/Shop/Delivery/Delivery'
import Payment from '../views/user/Gardens/Shop/Payment/Payment'
function UserRoutes() {
  return (
    <IsUser key="user">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gardens" element={<GardensList />} />
        <Route
          path="/gardens/:id/news"
          element={
            <>
              <UserNav />
              <News />
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
        <Route
          path="/gardens/:id/shop/delivery"
          element={
            <>
              <UserNav />
              <Delivery />
            </>
          }
        />
        <Route
          path="/gardens/:id/shop/payment"
          element={
            <>
              <UserNav />
              <Payment />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </IsUser>
  )
}

export default UserRoutes
