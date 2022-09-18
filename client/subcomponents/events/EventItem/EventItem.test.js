import React from 'react'
import { render, screen } from '@testing-library/react'

import EventItem from './EventItem'

describe('Volunteer button', () => {
  it('displays for a member', () => {
    const address = 'random address'
    const event = {}
    const user = { token: 'dummy token' }

    render(<EventItem address={address} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button', { name: 'Volunteer' })
    expect(volunteerButton).toHaveTextContent('Volunteer')
  })

  it('notifies user to sign in', () => {
    const address = 'cool place'
    const event = {}
    const user = { token: null }

    render(<EventItem address={address} event={event} user={user} />)
    const volunteerButton = screen.getByRole('button', {
      name: 'Please sign in to volunteer',
    })
    expect(volunteerButton).toHaveTextContent('Please sign in to volunteer')
  })
})
