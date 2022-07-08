import React from 'react'

import { getGarden } from '../about/aboutHelper'
import { renderWithRedux } from '../../../../test-utils'
import GardenEvents from './GardenEvents'
import { screen } from '@testing-library/react'

jest.mock('../about/aboutHelper')

test('garden events should render correct list of events', () => {
  getGarden.mockImplementation(() => {
    return Promise.resolve({
      name: 'name',
      events: [
        {
          id: 1,
          volunteersNeeded: 5,
          title: 'test event',
          date: 'date',
          description: 'description',
          status: 'status',
          // volunteer: {
          //   userId: event.userId,
          // },
        },
      ],
    })
  })
  renderWithRedux(<GardenEvents />, {
    initialEntries: ['/gardens/1/events'],
    route: '/gardens/:id/events',
    initialState: { user: { id: 1 } },
  })
  return screen.findAllByRole('article').then((events) => {
    expect(getGarden).toHaveBeenCalledTimes(1)
    console.log(events)
    expect(events[0].textContent).toMatch('test event')
    return null
  })
})
