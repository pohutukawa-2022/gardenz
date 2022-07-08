import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../../../test-utils'

import Index from './Index'

describe('events list', () => {
  it('displays correct number of events from props', () => {
    const events = [
      {
        id: 1,
        volunteersNeeded: 8,
        title: 'Weeding worker Bee',
        date: '2020-08-27',
        description: 'Its time to get these weeds under control.',
      },
      {
        id: 2,
        volunteersNeeded: 4,
        title: 'Sowing Corn',
        date: '2020-08-28',
        description: 'Help get out the lovely corns in the ground!.',
      },
    ]
    renderWithRedux(<Index events={events} />)
    const eventItems = screen.getAllByRole('heading', { level: 2 })
    expect(eventItems).toHaveLength(2)
    expect(events[0].title).toMatch('Weeding worker Bee')
    expect(events[0].description).toMatch(
      'Its time to get these weeds under control.'
    )
    expect(events[0].date).toMatch('2020-08-27')
    expect(events[0].id).toBe(1)
    expect(events[0].volunteersNeeded).toBe(8)
  })
})

describe('no event message', () => {
  it('displays correct message', () => {
    const events = []

    renderWithRedux(<Index events={events} />)
    const eventItems = screen.queryAllByRole('heading', { level: 2 })
    expect(eventItems).toHaveLength(0)
  })
})

describe('display no-event message', () => {
  it('displays correct message', () => {
    const events = []
    renderWithRedux(<Index events={events} />)
    const eventItems = screen.getByText(
      'Sorry no events found, please come back later!'
    )
    expect(eventItems).toBeInTheDocument()
  })
})
