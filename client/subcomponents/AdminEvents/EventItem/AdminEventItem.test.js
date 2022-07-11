import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../../test-utils'
import EventItem from './AdminEventItem'

describe('Displays Event Status', () => {
  it('displays active for an active event', () => {
    renderWithRouter(<EventItem event={{ status: 'Active' }} />)
    const listItem = screen.getByText('Event is Active!')
    expect(listItem).toBeVisible()
  })
  it('displays cancelled for a cancelled event', () => {
    renderWithRouter(<EventItem event={{ status: 'Cancelled' }} />)
    const listItem = screen.getByText('Event is Cancelled!')
    expect(listItem).toBeVisible()
  })
  it('displays the title for the event', () => {
    renderWithRouter(<EventItem event={{ title: 'Banana forage' }} />)
    const listItem = screen.getByText('Banana forage')
    expect(listItem).toBeVisible()
  })
  it('displays the date and time for the event', () => {
    renderWithRouter(<EventItem event={{ date: '6/07/22', time: '0830' }} />)
    const listItem = screen.getByText('6/07/22 at 0830')
    expect(listItem).toBeVisible()
  })
  it('displays the number of volunteers for the event', () => {
    renderWithRouter(
      <EventItem event={{ volunteersNeeded: 20, totalVolunteers: 15 }} />
    )
    const listItem = screen.getByText('5 of 20')
    expect(listItem).toBeVisible()
  })
  it('displays the address for the event', () => {
    renderWithRouter(<EventItem address={'Daniels backyard'} event={{}} />)
    const listItem = screen.getByText('Daniels backyard')
    expect(listItem).toBeVisible()
  })
})
