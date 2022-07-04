import { getNews } from './newsHelper'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { dispatch } from '../../../store'

jest.mock('../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

// eslint-disable-next-line no-template-curly-in-string
describe('-> GET /news/${gardenId} api call success', () => {
  it('dispatches with the correct event action for admin', () => {
    function consume(path) {
      expect(path).toMatch('1')
      return Promise.resolve({
        body: {
          news: [
            {
              id: 1,
              gardenId: 1,
              author: 2,
              title: 'Lettuce Picking Season',
              createdOn: '21/02/2022',
              content: 'test',
              firstName: 'User',
              lastName: 'second',
            },
          ],
        },
      })
    }

    return getNews(1, consume).then((news) => {
      expect(dispatch).toHaveBeenCalledWith(setWaiting())
      expect(dispatch).toHaveBeenCalledWith(clearWaiting())
      expect(news).toHaveLength(1)
      expect(news[0].title).toBe('Lettuce Picking Season')
      expect(news[0].createdOn).toBe('21/02/2022')
      expect(news[0].firstName).toBe('User')
      expect(news[0].lastName).toBe('second')
      expect(news[0].content).toBe('test')
      return null
    })
  })
})
