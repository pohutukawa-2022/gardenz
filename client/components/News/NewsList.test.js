import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NewsList from './NewsList'

describe('NewsList', () => {
  const fakeNews = [
    {
      title: 'Lettuce Picking Season',
      createdOn: '01/01/2222',
      content: 'test content',
      firstName: 'Test fistName',
      lastName: 'Test LastName',
    },
    {
      title: 'cat jumping',
      createdOn: '01/01/2222',
      content: 'test content2',
      firstName: 'Test fistName2',
      lastName: 'Test LastName2',
    },
  ]

  it('Print needed List of items amount', () => {
    render(<NewsList news={fakeNews} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })

  it('renders news data', async () => {
    render(<NewsList news={fakeNews} />)
    expect(screen.getByText(/Test LastName2/)).toBeInTheDocument()
    expect(await screen.queryByText('Lettuce Picking Season')).toBeNull()
  })
})
