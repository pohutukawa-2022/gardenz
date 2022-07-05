import { cacheUser } from './auth-utils'

jest.mock('./consume')

describe('isAuthenticated', () => {
  test('if isAuthenticated is false, getAccessTokenSilently is not called', () => {
    const getAccessTokenSilently = jest.fn()
    const isAuthenticated = false
    const user = {}
    return cacheUser(isAuthenticated, getAccessTokenSilently, user).then(() => {
      expect(getAccessTokenSilently).toHaveBeenCalledTimes(0)
      return null
    })
  })

  test('if isAuthenticated is true, getAccessTokenSilently is called', () => {
    const getAccessTokenSilently = jest.fn()
    const isAuthenticated = true
    const user = {}
    return cacheUser(isAuthenticated, getAccessTokenSilently, user).then(() => {
      expect(getAccessTokenSilently).toHaveBeenCalledTimes(1)
      return null
    })
  })
})
