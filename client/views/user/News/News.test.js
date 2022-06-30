import React from 'react'

import { getNews } from './newsHelper'
import { renderWithRedux } from '../../../test-utils'
import News from './News'
import { waitFor } from '@testing-library/react'

jest.mock('./newsHelper')

describe('List of news', () => {
  const fakeNews = [
    {
      id: 1,
      gardenId: 1,
      author: 2,
      title: 'test title1',
      createdOn: '21/02/2022',
      content: 'test1 content',
      firstName: 'test1 firstName',
      lastName: 'test1 lastName',
    },
    {
      id: 2,
      gardenId: 1,
      author: 2,
      title: 'test title2',
      createdOn: '21/02/2022',
      content: 'test2 content',
      firstName: 'test2 firstName',
      lastName: 'test2 lastName',
    },
  ]

  it('props send correct data', async () => {
    getNews.mockImplementation(() => Promise.resolve(fakeNews))

    renderWithRedux(<News news={fakeNews} />, {
      initialState: { user: { isAdmin: true } },
      initialEntries: ['/gardens/1/news'],
      route: '/gardens/:id/news',
    })

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith('1')
    })

    // TODO: assert that NewsList component is rendered
  })
})
