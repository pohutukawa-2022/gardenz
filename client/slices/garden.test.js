import gardenReducer, { setGarden, updateEventVols } from './garden'
import { updateVolCount } from '../slices/gardenReducerHelper'

jest.mock('../slices/gardenReducerHelper')

describe('garden reducer', () => {
  it('returns new garden object on "SET_GARDEN"', () => {
    const oldGarden = {
      id: 1,
      name: 'cool garden',
    }

    const action = {
      type: setGarden.type,
      payload: {
        id: 2,
        name: 'very cool garden',
      },
    }
    const newState = gardenReducer(oldGarden, action)
    expect(newState.id).toBe(2)
    expect(newState).not.toBe(oldGarden)
  })

  it('returns old state on unknown action type', () => {
    const oldGarden = {
      id: 1,
      name: 'cool garden',
    }

    const action = {
      type: 'RANDOM_OTHER_ACTION',
    }
    const newState = gardenReducer(oldGarden, action)
    expect(newState).toBe(oldGarden)
  })

  it('"UPDATE_EVENT_VOLS" calls updateVolCount()', () => {
    const state = {
      id: 11,
      volunteersNeeded: 11,
      title: 'Test',
      date: '2020-2-20',
      description: 'bla test',
      totalVolunteers: 2,
      isVolunteer: true,
    }

    const action = {
      type: updateEventVols.type,
      payload: 10,
    }

    updateVolCount.mockImplementation((garden, eventId) => {
      expect(eventId).toBe(10)
      return {
        id: 10,
        volunteersNeeded: 10,
        title: 'Test',
        date: '2020-2-20',
        description: 'bla test',
        totalVolunteers: 2,
        isVolunteer: true,
      }
    })

    const newState = gardenReducer(state, action)

    expect(updateVolCount).toHaveBeenCalled()
    expect(newState).not.toBe(state)
  })
})
