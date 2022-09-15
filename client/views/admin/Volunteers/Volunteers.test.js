import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux, renderWithRouter } from '../../../test-utils'
//import VolunteerList from '../../../subcomponents/volunteers/VolunteerList/VolunteerList'
import Volunteers from './Volunteers'
//import AddVolunteerForm from '../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerForm'
//import { latLng } from 'leaflet'
//import userEvent from '@testing-library/user-event'
//import { waitFor } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'

// jest.mock('./Volunteers')

describe('form', () => {
  it('form title is correct', () => {
    act(() => {
      renderWithRedux(<Volunteers />, {
        initialState: { user: {} },
      })
    })

    const header = screen.getByRole('heading', {
      name: 'Add Rock-Up Attendee',
    })

    expect(header).toHaveTextContent('Add Rock-Up Attendee')
  })
})

// describe('submit button', () => {
//   it('has "Add" name', () => {
//     const addButton = screen.getByRole('button')
//     expect(addButton).toHaveTextContent('Add')
//   })

//   it('calls addVolunteer with event data on click', async () => {
//     Volunteers.mockImplementation((event, navigateTo) => {
//       expect(event.firstName).toBe('testFirstName')
//       expect(event.lastName).toBe('testLastName')
//       expect(typeof navigateTo).toBe('function')
//     })

//     const firstNameInput = screen.getByRole('textbox', { name: 'firstName' })
//     const lastNameInput = screen.getByRole('textbox', { name: 'lastName' })

//     const addButton = screen.getByRole('button')

//     userEvent.type(firstNameInput, 'testFirstName')
//     userEvent.type(lastNameInput, 'testLastName')
//     userEvent.click(addButton)

//     await waitFor(() => {
//       expect(Volunteers).toHaveBeenCalled()
//     })
//   })
// })
