import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

import { renderWithRedux } from '../../../../test-utils'
import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import AddButton from '../../../../subcomponents/events/EventButtons/AddButton'

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

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('add button', () => {
  it('has "Add Event" name from props', () => {
    render(<AddButton />)
    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Add Event')
  })
  it('redirects to /admin/events/add on click', async () => {
    render(<AddButton />)
    const addButton = screen.getByRole('button')
    userEvent.click(addButton)

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/admin/events/add')
    })
  })
})
