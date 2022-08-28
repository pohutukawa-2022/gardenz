import React from 'react'

import { getGarden } from '../../../../../hooks/useGarden/useGardenHelper'
import { renderWithRedux } from '../../../../../test-utils'
import AdminEvent from './Index'
import { screen } from '@testing-library/react'

jest.mock('../../../../../hooks/useGarden/useGardenHelper')

test('garden events should render correct list of events', async () => {
  getGarden.mockImplementation(() => {
    return Promise.resolve({
      address: 'address',
      events: [
        {
          id: 1,
          title: 'Banana forage',
          date: '6/07/22',
          volunteersNeeded: 20,
          totalVolunteers: 15,
        },
      ],
    })
  })

  renderWithRedux(<AdminEvent />, {
    initialEntries: ['/admin/gardens/1/events'],
    route: '/admin/gardens/:id/events',
    initialState: {
      user: { id: 1 },
    },
  })

  expect(getGarden).toHaveBeenCalledTimes(1)

  const name = await screen.findByText('Banana forage')
  const address = await screen.findByText('address')
  const remaining = await screen.findByText('5 of 20')

  expect(name).toBeInTheDocument()
  expect(address).toBeInTheDocument()
  expect(remaining).toBeInTheDocument()
})
