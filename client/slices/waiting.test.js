import waitingReducer, {
  setWaiting,
  clearWaiting,
  showError,
  setGarden,
  updateEventVols,
} from '../slices/waiting'

describe('waiting reducer', () => {
  it('returns true on "SET_WAITING"', () => {
    const action = {
      type: setWaiting.type,
    }
    const newState = waitingReducer(false, action)
    expect(newState).toBeTruthy()
  })

  it('returns false on "SET_GARDEN"', () => {
    const action = {
      type: setGarden.type,
    }
    const newState = waitingReducer(true, action)
    expect(newState).toBeFalsy()
  })

  it('returns false on "CLEAR_WAITING"', () => {
    const action = {
      type: clearWaiting.type,
    }
    const newState = waitingReducer(true, action)
    expect(newState).toBeFalsy()
  })

  it('returns false on "SHOW_ERROR"', () => {
    const action = {
      type: showError.type,
    }
    const newState = waitingReducer(true, action)
    expect(newState).toBeFalsy()
  })

  it('returns old state on unknown action type', () => {
    const action = {
      type: 'RANDOM_OTHER_ACTION',
    }
    const newState = waitingReducer(false, action)
    expect(newState).toBeFalsy()
  })
})

it('returns false on "UPDATE_EVENT_VOLS"', () => {
  const action = {
    type: updateEventVols.type,
  }
  const newState = waitingReducer(true, action)
  expect(newState).toBeFalsy()
})
