import { getEvent, updateEvent } from './editEventHelper'
import { clearWaiting } from '../../../../slices/waiting'
import { dispatch, getState } from '../../../../store'

jest.mock('../../../../store')

// resets the store.dispatch calls between tests
afterEach(() => {
  return dispatch.mockClear()
})

describe('getEvent', () => {
  it('returns event, dispatches correctly on GET /events/:id api call success', async () => {
    function consume(url) {
      expect(url).toBe('/events/1')
      return Promise.resolve({
        body: {
          title: 'test event',
          date: '2020-12-18',
          description: 'epic test event',
          volunteersNeeded: 14,
        },
      })
    }
    const event = await getEvent(1, consume)
    expect(event.title).toBe('test event')
    expect(event.volunteersNeeded).toBe(14)
    expect(dispatch).toHaveBeenCalledWith(clearWaiting())
  })
  it('dispatches error on GET /events/:id api call rejection', async () => {
    function consume() {
      return Promise.reject(new Error('mock error'))
    }
    await getEvent(999, consume)
    expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
  })
})

describe('updateEvent', () => {
  it('dispatches, redirects correctly on PATCH /events/:id api call success', async () => {
    getState.mockImplementation(() => ({
      user: { gardenId: 1, token: 'dummytoken' },
    }))
    const event = {
      eventId: 1,
      title: 'test event',
      date: '2021-03-22',
      volunteersNeeded: 5,
      description: 'really rad event',
      gardenId: 1,
    }
    const navigateTo = jest.fn()
    function consume(url, token, method, eventToUpdate) {
      expect(url).toBe('/events/1')
      expect(method).toBe('patch')
      expect(eventToUpdate.title).toBe('test event')
      expect(eventToUpdate).not.toBe(event)
      return Promise.resolve()
    }
    await updateEvent('1', event, navigateTo, consume)
    expect(dispatch).toHaveBeenCalledWith(clearWaiting())
    expect(navigateTo).toHaveBeenCalledWith('/admin/gardens/1/events')
  })
  it('dispatches error on PATCH /events/id api call rejection', async () => {
    const navigateTo = jest.fn()
    function consume() {
      return Promise.reject(new Error('mock error'))
    }
    await updateEvent(999, {}, navigateTo, consume)
    expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
    expect(navigateTo).not.toHaveBeenCalled()
  })
})
