import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NewsList from './NewsList'
import { renderWithRedux } from '../../test-utils'

describe('NewsList', () => {
  const fakeNews = [
    {
      id: 1,
      title: 'Lettuce Picking Season',
      createdOn: '01/01/2222',
      content: 'test content',
      firstName: 'Test fistName',
      lastName: 'Test LastName',
    },
    {
      id: 2,
      title: 'cat jumping',
      createdOn: '01/01/2222',
      content: 'test content2',
      firstName: 'Test fistName2',
      lastName: 'Test LastName2',
    },
  ]

  it('Print needed List of items amount', () => {
    renderWithRedux(<NewsList news={fakeNews} />, {
      initialState: { user: { isAdmin: true } },
      initialEntries: ['/gardens/1/news'],
      route: '/gardens/:id/news',
    })
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })

  it('renders news data', async () => {
    renderWithRedux(<NewsList news={fakeNews} />, {
      initialState: { user: { isAdmin: true } },
      initialEntries: ['/gardens/1/news'],
      route: '/gardens/:id/news',
    })
    expect(screen.getByText(/Test LastName2/)).toBeInTheDocument()
    expect(await screen.queryByText('Lettuce Picking Season')).toBeNull()
  })
})
