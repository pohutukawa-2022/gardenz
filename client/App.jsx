import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Header from './subcomponents/Header'
import Error from './subcomponents/Error/Error'
import { cacheUser } from './auth-utils'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

export default function App() {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  useEffect(async () => {
    await cacheUser(isAuthenticated, getAccessTokenSilently, user)
  })

  return (
    <>
      <Error />
      <Header />
      <AdminRoutes />
      <UserRoutes />
    </>
  )
}
