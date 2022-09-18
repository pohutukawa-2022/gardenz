import { cacheUser } from './auth-utils'

jest.mock('./consume')

describe('isAuthenticated', () => {
  test('if isAuthenticated is false, getAccessTokenSilently is not called', async () => {
    const getAccessTokenSilently = jest.fn()
    const isAuthenticated = false
    const user = {}
    await cacheUser(isAuthenticated, getAccessTokenSilently, user)

    expect(getAccessTokenSilently).toHaveBeenCalledTimes(0)
    return null
  })
})

test('if isAuthenticated is true, getAccessTokenSilently is called', async () => {
  const getAccessTokenSilently = jest.fn()
  const isAuthenticated = true
  const user = {}
  await cacheUser(isAuthenticated, getAccessTokenSilently, user)

  expect(getAccessTokenSilently).toHaveBeenCalledTimes(1)
  return null
})
