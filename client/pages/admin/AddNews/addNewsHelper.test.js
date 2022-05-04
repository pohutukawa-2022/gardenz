import { addNews } from './addNewsHelper'
import { CLEAR_WAITING } from '../../../actions/waiting'
import { dispatch, getState } from '../../../store'

jest.mock('../../../store')

// resets the store.dispatch calls between tests
afterEach(() => {
  return dispatch.mockClear()
})

describe('testing the helper function addNews', () => {
  it('dispatches and redirects correctly on POST /news api call success', () => {
    getState.mockImplementation(() => ({
      user: { gardenId: 1, token: 'dummytoken' },
    }))
    const news = {
      title: 'test news',
      createdOn: '3/22/2021',
      content: 'really rad news',
    }
    const navigateTo = jest.fn()
    function consume(url, token, method, newNews) {
      expect(method).toBe('post')
      expect(newNews).not.toBe(news)
      expect(newNews.gardenId).toBe(1)
      expect(newNews.title).toBe('test news')
      return Promise.resolve()
    }

    return addNews(news, navigateTo, consume).then(() => {
      expect(dispatch.mock.calls[1][0].type).toBe(CLEAR_WAITING)
      expect(navigateTo).toHaveBeenCalledWith('/gardens/1/news')
      return null
    })
  })

  it('dispatches error on POST /news rejection', () => {
    const navigateTo = jest.fn()
    getState.mockImplementation(() => ({
      user: { gardenId: 1, token: 'dummytoken' },
    }))
    function consume() {
      return Promise.reject(new Error('mock error'))
    }
    return addNews({}, navigateTo, consume).then(() => {
      expect(dispatch.mock.calls[1][0].errorMessage).toBe('mock error')
      expect(navigateTo).not.toHaveBeenCalled()
      return null
    })
  })
})
