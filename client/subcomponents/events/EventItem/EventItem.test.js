import React from 'react'
import { render, screen } from '@testing-library/react'

import EventItem from './EventItem'

describe('Volunteer button', () => {
  it('displays for a member', () => {
    const garden = {}
    const event = {}
    const user = {
      token: 'dummy token',
    }

    render(<EventItem garden={garden} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button', { name: 'Volunteer' })
    expect(volunteerButton).toHaveTextContent('Volunteer')
  })

  it('notifies user to sign in', () => {
    const garden = {}
    const event = {}
    const user = {}

    render(<EventItem garden={garden} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button')
    expect(volunteerButton).toHaveTextContent('Please sign in to volunteer')
  })
})
