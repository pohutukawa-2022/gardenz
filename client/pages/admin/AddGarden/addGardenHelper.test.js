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
      description: 'really rad event',
      address: 'test address',
    }
    const navigateTo = jest.fn()
    function consume(url, token, method, garden) {
      expect(method).toBe('post')
      expect(garden).not.toBe(garden)
      expect(garden.title).toBe('test garden')
      return Promise.resolve()
    }
    return addGarden(garden, navigateTo, consume).then(() => {
      expect(dispatch.mock.calls[1][0].type).toBe(CLEAR_WAITING)
      expect(navigateTo).toHaveBeenCalledWith('/gardens/1')
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
    return addGarden({}, navigateTo, consume).then(() => {
      expect(dispatch.mock.calls[1][0].errorMessage).toBe('mock error')
      expect(navigateTo).not.toHaveBeenCalled()
      return null
    })
  })
})
