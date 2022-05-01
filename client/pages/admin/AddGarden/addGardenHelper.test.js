import { addGarden } from './addGardenHelper'
import { CLEAR_WAITING } from '../../../actions/waiting'
import { dispatch, getState } from '../../../store'

jest.mock('../../../store')

// resets the store.dispatch calls between tests
afterEach(() => {
  return dispatch.mockClear()
})

describe('addGarden', () => {
  it('dispatches and redirects correctly on POST /events api call success', () => {
    getState.mockImplementation(() => ({
      user: { token: 'dummytoken' },
    }))
    const garden = {
      name: 'test garden',
      description: 'really rad garden',
      address: 'test address',
    }
    const navigateTo = jest.fn()
    function consume(url, token, method, newGarden) {
      expect(method).toBe('post')
      expect(newGarden.name).toBe('test garden')
      return Promise.resolve()
    }
    return addGarden(garden, consume).then(() => {
      console.log('garden: ', garden, 'consume: ', consume)
      expect(dispatch.mock.calls[1][0].type).toBe(CLEAR_WAITING)
      return null
    })
  })

  it('dispatches error on POST /events rejection', () => {
    const navigateTo = jest.fn()
    getState.mockImplementation(() => ({
      user: { token: 'dummytoken' },
    }))
    function consume() {
      return Promise.reject(new Error('mock error'))
    }
    return addGarden({}, consume).then(() => {
      expect(dispatch.mock.calls[1][0].errorMessage).toBe('mock error')
      expect(navigateTo).not.toHaveBeenCalled()
      return null
    })
  })
})
