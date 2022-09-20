import React from 'react'
import { screen, waitFor } from '@testing-library/react'

import { renderWithRedux } from '../../../../test-utils'
import About from './About'
import { getGarden } from '../../../../hooks/useGarden/useGardenHelper'
import { getProduce } from '../../../../subcomponents/produce/ProduceList/produceHelper'

jest.mock('../../../../hooks/useGarden/useGardenHelper')
jest.mock('../../../../subcomponents/produce/ProduceList/produceHelper')

getProduce.mockImplementation(() =>
  Promise.resolve({
    produce: [{ id: 1, name: 'banana' }],
  })
)

describe('Garden', () => {
  it('calls getGarden helper and displays garden data on mount', async () => {
    getGarden.mockImplementation(() =>
      Promise.resolve({
        name: 'test garden',
        description: 'an excellent test garden',
        events: [],
        address: 'cool place, nz',
        lat: 123,
        lon: -123,
        phone: '09 123 4567',
        email: 'test@test.com',
      })
    )
    renderWithRedux(<About />, {
      initialState: {
        user: {
          id: 1,
        },
      },
    })

    // we need renderWithRedux even though Garden isn't connecting to the store
    // because it's child component (Events) does
    await waitFor(() => {
      const phone = screen.getByText('09 123 4567')
      const email = screen.getByText(/test@test.com/)
      const address = screen.getByText(/cool place, nz/)
      expect(getGarden).toHaveBeenCalled()
      expect(phone).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(address).toBeInTheDocument()
      return null
    })
  })
})
