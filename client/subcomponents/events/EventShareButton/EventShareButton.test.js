import React from 'react'
import { render, screen } from '@testing-library/react'

import ShareButton from './EventShareButton'

describe('Share button', () => {
  it('facebook button exists in the dom', () => {
    const url = {
      id: 3,
      href: 'http://localhost:3000/gardens/1/events',
    }

    render(<ShareButton url={url} />)

    const facebookButton = screen.getByLabelText('facebook')

    expect(facebookButton).toBeInTheDocument()
  })
})
