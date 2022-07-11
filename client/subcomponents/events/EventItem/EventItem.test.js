import React from 'react'
import { render, screen } from '@testing-library/react'

import EventItem from './EventItem'

describe('Volunteer button', () => {
  it('displays for a member', () => {
    const garden = {}
    const event = {}
    render(<EventItem garden={garden} event={event} />)
    const volunteerButton = screen.getByRole('button', { name: 'Volunteer' })
    expect(volunteerButton).toHaveTextContent('Volunteer')
  })
})
