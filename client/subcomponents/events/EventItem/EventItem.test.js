import React from 'react'
import { render, screen } from '@testing-library/react'

import EventItem from './EventItem'

describe('Volunteer button', () => {
  it('displays for a member', () => {
    const address = 'random address'
    const event = {}
    render(<EventItem address={address} event={event} />)
    const volunteerButton = screen.getByRole('button', { name: 'Volunteer' })
    expect(volunteerButton).toHaveTextContent('Volunteer')
  })
})
