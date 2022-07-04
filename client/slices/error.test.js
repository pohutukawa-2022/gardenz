import errorReducer, { hideError, showError } from './error'

describe('error reducer', () => {
  it('returns error message on "SHOW_ERROR"', () => {
    const action = {
      type: showError,
      payload: 'mock error',
    }
    const newState = errorReducer(null, action)
    expect(newState).toBe('mock error')
  })

  it('returns null on "HIDE_ERROR"', () => {
    const action = {
      type: hideError,
    }
    const newState = errorReducer('error message', action)
    expect(newState).toBeNull()
  })

  it('returns old state on unknown action type', () => {
    const action = {
      type: 'RANDOM_OTHER_ACTION',
    }
    const newState = errorReducer(null, action)
    expect(newState).toBeNull()
  })
})
