import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import News from './News'

describe('News', () => {
  const fakeNews = {
    title: 'Lettuce Picking Season',
    createdOn: '01/01/1200',
    firstName: 'FirstName',
    lastName: 'LastName',
  }

  it('Print needed List of items amount', () => {
    render(<News news={fakeNews} />)
    const news = screen.getAllByRole('listitem')
    expect(news).toHaveLength(3)
    expect(news[0].textContent).toBe('By FirstName LastName:')
  })

  it('renders news data', async () => {
    render(<News news={fakeNews} />)
    const news = screen.getByText(/LastName/)
    const title = await screen.queryByText('Lettuce Picking Season')
    expect(news).toBeInTheDocument()
    expect(title).toBeNull()
  })

  it('Render correct relative time format', async () => {
    render(<News news={fakeNews} />)
    const createdOn = screen.getByText(/ago/)
    expect(createdOn).toBeInTheDocument()
  })
})
