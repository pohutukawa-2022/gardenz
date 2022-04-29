import React from 'react'
import { render, screen } from '@testing-library/react'
import NewsList from '../../components/News/NewsList'
import { getNews } from './newsHelper'

jest.mock('./newsHelper')

afterEach(() => {
  getNews.mockClear()
})

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

  it('props send correct data', () => {
    const { getByText } = render(<NewsList news={fakeNews} />)
    expect(getByText(/By test1 firstName/)).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeTruthy()
    return screen
      .findAllByRole('list')
      .then((listItem) => expect(listItem).toHaveLength(1))
  })
})
