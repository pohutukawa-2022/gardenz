import { getEvent } from './eventHelper'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { dispatch } from '../../../../store'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

const mockUserAdmin = {
  isAdmin: true,
}

const mockUserNonAdmin = {
  isAdmin: false,
  id: 1,
}

describe('getEvent', () => {
  describe('-> GET /events/:id api call success', () => {
    it('dispatches with the correct event action for admin', async () => {
      function consume(path) {
        expect(path).toMatch('2')
        return Promise.resolve({
          body: {
            gardenName: 'test name',
            gardenAddress: 'test address',
            title: 'test event',
            date: '2021-04-30',
            volunteersNeeded: 3,
            description: 'wow great description',
            volunteers: [{}],
            extraVolunteers: [{}],
            fake: 'asdf',
          },
        })
      }

      await getEvent(2, mockUserAdmin, consume)
      ;(event) => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        expect(event.title).toBe('test event')
        expect(event.volunteers).toHaveLength(1)
        expect(event.extraVolunteers).toHaveLength(1)
        expect(event).not.toHaveProperty('fake')
        return null
      }
    })
    it('dispatches with the correct event action for non admin', async () => {
      function consume(path) {
        expect(path).toMatch('2')
        return Promise.resolve({
          body: {
            gardenName: 'test name',
            gardenAddress: 'test address',
            title: 'test event',
            date: '2021-04-30',
            volunteersNeeded: 3,
            description: 'wow great description',
            volunteers: [{ userId: mockUserNonAdmin.id }],
            isVolunteer: true,
            extraVolunteers: [],
            fake: 'asdf',
          },
        })
      }

      await getEvent((2, mockUserNonAdmin, consume))
      ;(event) => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        expect(event.title).toBe('test event')
        expect(event.isVolunteer).toBe(true)
        expect(event).not.toHaveProperty('fake')
        return null
      }
    })
  })

  describe('-> GET /event/:id api call rejection', () => {
    it('dispatches error correctly', async () => {
      function consume() {
        return Promise.reject(new Error('mock error'))
      }
      await getEvent(null, mockUserAdmin, consume)
      ;() => {
        expect(dispatch.mock.calls[1][0].payload).toBe('mock error')
        return null
      }
    })
  })
})
