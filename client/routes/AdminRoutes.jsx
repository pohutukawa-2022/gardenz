import React from 'react'

import AdminNav from '../subcomponents/adminNav/AdminNav'
import AddEvent from '../views/admin/Events/AddEvent/AddEvent'
import EditEvent from '../views/admin/Events/EditEvent/EditEvent'
import AddGarden from '../views/admin/Gardens/AddGarden/AddGarden'
import Event from '../views/admin/Events/Event/Event'
import AddNews from '../views/admin/News/AddNews/AddNews'
import Volunteers from '../views/admin/Volunteers/Volunteers'
import AddProduce from '../views/admin/produce/AddProduce'
import Orders from '../views/admin/Gardens/orders/Orders.jsx'
import IsAdmin from '../subcomponents/IsAdmin/IsAdmin'
import AdminEvents from '../views/admin/Gardens/Events/Index/Index'
import AdminGardens from '../views/admin/Gardens/Index/Index'
import GardenMenu from '../views/admin/Gardens/Menu/Menu'
import Menu from '../views/admin/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import Profile from '../views/user/Profile/Profile'
import PageNotFound from '../views/PageNotFound/PageNotFound'

function AdminRoutes() {
  return (
    <IsAdmin key="admin">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin/gardens" element={<AdminGardens />} />
        <Route path="/admin/gardens/add" element={<AddGarden />} />
        <Route path="/admin/gardens/:gardenId/menu" element={<GardenMenu />} />
        <Route
          path="/admin/gardens/:gardenId/news/add"
          element={
            <>
              <AdminNav />
              <AddNews />
            </>
          }
        />
        <Route
          path="/admin/gardens/:gardenId/events"
          element={
            <>
              <AdminNav />
              <AdminEvents />
            </>
          }
        />
        <Route
          path="/admin/events/:id"
          element={
            <>
              <AdminNav />
              <Event />
            </>
          }
        />
        <Route
          path="/admin/events/add"
          element={
            <>
              <AdminNav />
              <AddEvent />
            </>
          }
        />
        <Route
          path="/admin/gardens/:gardenId/events/:eventId/edit"
          element={
            <>
              <AdminNav />
              <EditEvent />
            </>
          }
        />
        <Route
          path="/admin/events/:gardenId/volunteers"
          element={
            <>
              <AdminNav />
              <Volunteers />
            </>
          }
        />
        <Route
          path="/admin/produce/add"
          element={
            <>
              <AdminNav />
              <AddProduce />
            </>
          }
        />
        <Route
          path="/admin/gardens/:gardenId/gallery"
          element={
            <>
              <AdminNav />
              <p>gallery placeholder</p>
            </>
          }
        />
        <Route
          path="/admin/gardens/:gardenId/news"
          element={
            <>
              <AdminNav />
              <p>news should be displayed and edited here</p>
            </>
          }
        />
        <Route
          path="/admin/gardens/:gardenId/orders"
          element={
            <>
              <AdminNav />
              <Orders />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </IsAdmin>
  )
}

export default AdminRoutes
