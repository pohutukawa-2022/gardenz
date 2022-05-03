import { getProduce } from './produceHelper'
import { dispatch } from '../../store'
import { setWaiting, clearWaiting } from '../../actions/waiting'

jest.mock('../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('getProduce', () => {
  describe('GET /getProduce/:id call', () => {
    it('Dispatches correctly and returns data', () => {
      function fakeConsume() {
        return Promise.resolve({
          body: {
            produceId: 1,
            gardens: [1, 2, 3],
            produce: [
              { id: 1, name: 'Spinach', produceType: 1 },
              { id: 2, name: 'Apple', produceType: 2 },
            ],
          },
        })
      }

      return getProduce(1, fakeConsume).then((event) => {
        expect(dispatch).toHaveBeenCalledWith({ type: SET_WAITING })
        expect(dispatch).toHaveBeenCalledWith({ type: CLEAR_WAITING })
        expect(event.gardens).toBe([1, 2, 3])
        expect(event.produce[0].name).toBe('Spinach')
        expect(event).not.toHaveProperty('fake property >:)')
        return null
      })
    })
  })
})

/*
describe('the file or function', () => {
    it('text description', () => {
        function
    })
})
*/
