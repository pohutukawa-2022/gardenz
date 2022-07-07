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

  it('News compnent renders fakeNews', () => {
    render(<News news={fakeNews} />)
    const lastName = screen.getByText(/LastName/)
    const title = screen.queryByText('Lettuce Picking Season')
    expect(lastName).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
