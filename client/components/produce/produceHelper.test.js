// import { getProduce } from './produceHelper'
// import { dispatch } from '../../store'
// import { setWaiting, clearWaiting } from '../../actions/waiting'

// jest.mock('../../store')

// afterEach(() => {
//   return jest.resetAllMocks()
// })

// describe('getProduce', () => {
//   describe('GET /getProduce/:id call', () => {
//     it('Dispatches correctly and returns data', () => {
//       function fakeConsume(path) {
//         console.log(path)
//         return Promise.resolve({
//           produce: [
//             { id: 1, name: 'Spinach', produceType: 'Leafy greens' },
//             { id: 2, name: 'Apple', produceType: 'Fruits' },
//           ],
//         })
//       }
//       console.log(fakeConsume())
//       return getProduce(1, fakeConsume).then((event) => {
//         expect(event[0].name).toBe('Spinach')
//         expect(event[0].produceType).toBe('Leafy greens')
//         expect(event).not.toHaveProperty('fake property >:)')
//         return null
//       })
//     })
//   })
// })
