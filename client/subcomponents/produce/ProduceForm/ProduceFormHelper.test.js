import { dispatch, getState } from '../../../store'
import { getProduceTypes } from './ProduceFormHelper'
import { clearWaiting, setWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('getProduceTypes', () => {
  describe('-> GET /producetypes/ api call success', () => {
    it('dispatches waiting actions correctly', () => {
      getState.mockImplementation(() => {
        return {
          user: {
            token: '',
          },
        }
      })

      function consume() {
        return Promise.resolve()
      }

      return getProduceTypes(consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(setWaiting())
        expect(dispatch).toHaveBeenCalledWith(clearWaiting())
        return null
      })
    })

    // Although the shape of the data produced from the API is already tested on the backend,
    // the purpose of this test is to check that getProduceTypes returns the data structure from the API unchanged.
    // It is not strictly necesssary and creates more test debt but we have kept it in for learning purposes
    it('return correct produce type array', () => {
      getState.mockImplementation(() => {
        return {
          user: {
            token: '',
          },
        }
      })

      function consume() {
        return Promise.resolve({
          body: {
            produceTypes: [
              {
                id: 1,
                name: 'veggies',
              },
              {
                id: 2,
                name: 'fruits',
              },
            ],
          },
        })
      }
      return getProduceTypes(consume).then((produceTypes) => {
        expect(produceTypes).toHaveLength(2)
        expect(produceTypes[0].id).toBe(1)
        expect(produceTypes[0].name).toBe('veggies')
        expect(produceTypes[1].id).toBe(2)
        expect(produceTypes[1].name).toBe('fruits')
        return null
      })
    })
  })
  describe('-> GET /producetypes/ api call rejection', () => {
    it('dispatches error correctly', () => {
      getState.mockImplementation(() => {
        return {
          user: {
            token: '',
          },
        }
      })

      function consume() {
        return Promise.reject({ message: 'test error' })
      }

      return getProduceTypes(consume).then(() => {
        expect(dispatch).toHaveBeenCalledWith(showError('test error'))
        return null
      })
    })
  })
})
