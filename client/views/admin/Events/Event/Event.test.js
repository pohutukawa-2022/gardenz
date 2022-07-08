import React from 'react'
import { Provider } from 'react-redux'
import { screen } from '@testing-library/react'
import { renderWithRedux, renderWithRouter } from '../../../../test-utils'
import VolunteerList from '../../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import Event from './Event'
import store from '../../../../store'

jest.mock('./eventHelper')

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

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

// test('Check Add and Edit buttons text/routes', () => {
//   //Arange
//   renderWithRouter(<Event />, {
//     initialEntries: ['/admin/events/add'],
//     router: '/admin/events/add',
//   })

//   //Act

//   const links = screen.findAllByRole('link')

//   //Assert
//   expect(mockedUsedNavigate).toHaveBeenCalled()
//   //expect(links[1].href).toMatch('/admin/events/add')
// })

describe('AddButton', () => {
  it('has text "Add" when when button is on page', () => {
    const AddButton = screen.getByRole('button')
    expect(AddButton).toHaveTextContent('Add')
  })
})

//expect(buttons[0]).toHaveTextContent('Add Event')
