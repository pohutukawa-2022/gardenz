import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../../../test-utils'

import Events from './Events'

describe('events list', () => {
  it('displays correct number of events from props', () => {
    const events = [
      {
        id: 1,
        volunteersNeeded: 8,
        totalVolunteers: 0,
        title: 'Weeding worker Bee',
        date: '2020-08-27',
        description: 'Its time to get these weeds under control.',
      },
      {
        id: 2,
        volunteersNeeded: 4,
        totalVolunteers: 0,
        title: 'Sowing Corn',
        date: '2020-08-28',
        description: 'Help get out the lovely corns in the ground!.',
      },
    ]

    const garden = {
      address: 'la la land',
    }

    renderWithRedux(<Events events={events} garden={garden} user={{}} />)
    const eventItems = screen.getAllByRole('heading', { level: 2 })
    expect(eventItems).toHaveLength(2)
    const title = screen.getByText(events[0].title)
    const date = screen.getByText(events[0].date)
    const volunteersNeeded = screen.getByText('8 of 8')
    expect(title).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(volunteersNeeded).toBeInTheDocument()
  })
})

describe('no event message', () => {
  it('displays correct message', () => {
    const events = []

    renderWithRedux(<Events events={events} />)
    const eventItems = screen.queryAllByRole('heading', { level: 2 })
    expect(eventItems).toHaveLength(0)
  })
})

describe('display no-event message', () => {
  it('displays correct message', () => {
    const events = []
    renderWithRedux(<Events events={events} user={{}} />)
    const eventItems = screen.getByText(
      'Sorry no events found, please come back later!'
    )
    expect(eventItems).toBeInTheDocument()
  })
})
