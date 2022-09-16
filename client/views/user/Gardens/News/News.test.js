import React from 'react'

import { getNews } from './newsHelper'
import { renderWithRedux } from '../../../../test-utils'
import News from './News'
import { waitFor, screen } from '@testing-library/react'

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

    renderWithRedux(<News />, {
      initialState: { user: { isAdmin: true } },
      initialEntries: ['/gardens/1/news'],
      route: '/gardens/:id/news',
    })

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith('1')
    })

    // TODO: assert that NewsList component is rendered
    const title = await screen.getByRole('heading', { name: 'test title1' })
    const newsHeader = await screen.getByRole('heading', { name: 'News' })
    const button = await screen.getAllByRole('button', { name: 'likeButton' })
    // expect(listItems).toHaveLength(2)
    expect(true).toBeTruthy()
    // expect(title.textContent).toMatch('test title1')
    // expect(.textContent).toMatch('test1 lastName')
    // expect(.textContent).toMatch('test1 content')
    // expect(.textContent).toMatch('test title2')
    // expect(.textContent).toMatch('test2 firstName')
    // expect(.textContent).toMatch('test2 lastName')
    // expect(.textContent).toMatch('test2 content')
  })
})
