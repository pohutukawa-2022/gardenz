import React from 'react'

import { getGarden } from '../../../../hooks/useGarden/useGardenHelper'
import { renderWithRedux } from '../../../../test-utils'
import GardenEvents from './GardenEvents'
import { screen } from '@testing-library/react'

jest.mock('../../../../hooks/useGarden/useGardenHelper')

test('garden events should render correct list of events', async () => {
  getGarden.mockImplementation(() => {
    return Promise.resolve({
      name: 'name',
      address: 'address',
      events: [
        {
          id: 1,
          volunteersNeeded: 10,
          totalVolunteers: 5,
          title: 'event title',
          date: 'date',
          description: 'description',
          status: 'status',
        },
      ],
    })
  })

  renderWithRedux(<GardenEvents />, {
    initialEntries: ['/gardens/1/events'],
    route: '/gardens/:id/events',
    initialState: {
      user: { id: 1 },
    },
  })

  expect(getGarden).toHaveBeenCalledTimes(1)
  const title = await screen.findByText('event title')
  const date = await screen.findByText('date')
  const address = await screen.findByText('address')
  const remaining = await screen.findByText('5 of 10')
  expect(title).toBeInTheDocument()
  expect(date).toBeInTheDocument()
  expect(address).toBeInTheDocument()
  expect(remaining).toBeInTheDocument()
})
