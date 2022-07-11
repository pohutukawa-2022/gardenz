import React from 'react'
import { screen } from '@testing-library/react'
import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'

import { renderWithRedux } from '../../../../test-utils'
import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import Event from './Event'
import { getEvent } from './eventHelper'

jest.mock('./eventHelper')

describe('List of signed up volunteers', () => {
  const mockVolunteers = [
    {
      userId: 1,
      firstName: 'Test User',
      lastName: 'Lastname',
      attended: true,
    },
    {
      userId: 2,
      firstName: 'Test User 2',
      lastName: 'Lastname 2',
      attended: false,
    },
  ]

  it('displays only for admin', () => {
    renderWithRedux(<VolunteerList volunteers={mockVolunteers} />, {
      initialState: { user: { isAdmin: true } },
    })
    return screen.findAllByRole('listitem').then((volunteers) => {
      expect(volunteers[1]).toHaveTextContent('Test User 2')
      return null
    })
  })
})

test('has correct edit button', () => {
  getEvent.mockImplementation((id, user, consume = requestor) => {
    dispatch(setWaiting())
    return consume(`/events/${id}`).then(() => {
      dispatch(clearWaiting())

      return null
    })
  })

  renderWithRedux(<Event />)
  const buttons = screen.getAllByRole('button')
  expect(buttons[1]).toHaveTextContent('Edit Event')
})
