import consume from './consume'
import { dispatch } from './store'
import { showError } from './slices/error'
import { setUser } from './slices/user'
import { clearWaiting, setWaiting } from './slices/waiting'

const emptyUser = {
  id: null,
  isAdmin: false,
}

function saveUser(user = emptyUser) {
  dispatch(setUser(user))
}

export async function cacheUser(isAuthenticated, getAccessTokenSilently, user) {
  dispatch(setWaiting())
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const res = await consume(`/users/${user.sub}`, token)
      const { id, firstName, lastName, email, isAdmin } = res.body
      saveUser({ id, firstName, lastName, email, isAdmin, token })
    } catch (err) {
      dispatch(showError('Unable to set the current user'))
    }
  } else {
    saveUser()
  }

  dispatch(clearWaiting())
}

export function getLoginFn(useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getRegisterFn(useAuth0) {
  const { loginWithRedirect } = useAuth0()
  return () =>
    loginWithRedirect({
      screen_hint: 'signin',
      scope: 'role:member',
    })
}

export function getLogoutFn(useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated(useAuth0) {
  return useAuth0().isAuthenticated
}
