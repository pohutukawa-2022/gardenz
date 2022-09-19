import { addEvent } from './addEventHelper'
import { clearWaiting } from '../../../../slices/waiting'
import { dispatch, getState } from '../../../../store'

jest.mock('../../../../store')

// resets the store.dispatch calls between tests
afterEach(() => {
  return dispatch.mockClear()
})

describe('addEvent', () => {
  it('dispatches and redirects correctly on POST /events api call success', async () => {
    getState.mockImplementation(() => ({
      user: { gardenId: 1, token: 'dummytoken' },
    }))
    const event = {
      title: 'test event',
      date: '2021-03-22',
      volunteersNeeded: 5,
      description: 'really rad event',
    }
    const navigateTo = jest.fn()
    function consume(url, token, method, newEvent) {
      expect(method).toBe('post')
      expect(newEvent).not.toBe(event)
      expect(newEvent.gardenId).toBe(1)
      expect(newEvent.title).toBe('test event')
      return Promise.resolve()
    }
    await addEvent(event, navigateTo, consume)
    expect(dispatch).toHaveBeenCalledWith(clearWaiting())
    expect(navigateTo).toHaveBeenCalledWith('/gardens/1')
  })

  it('dispatches error on POST /events rejection', async () => {
    const navigateTo = jest.fn()
    getState.mockImplementation(() => ({
      user: { gardenId: 1, token: 'dummytoken' },
    }))
    function consume() {
      return Promise.reject(new Error('mock error'))
    }
    await addEvent({}, navigateTo, consume)
    expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
    expect(navigateTo).not.toHaveBeenCalled()
  })
})
