import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../../test-utils'
import Volunteers from './Volunteers'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'
import { addVolunteer } from '../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerFormHelper'

jest.mock(
  '../../../subcomponents/volunteers/RockUpVolunteerForm/AddVolunteerFormHelper'
)

describe('form', () => {
  it('form title is correct', async () => {
    act(() => {
      renderWithRedux(<Volunteers />)
    })

    await waitFor(() => {
      const header = screen.getByRole('heading', {
        name: 'Add Rock-Up Attendee',
      })
      expect(header).toHaveTextContent('Add Rock-Up Attendee')
    })
  })
})

describe('submit button', () => {
  it('has "Add" name', () => {
    act(() => {
      renderWithRedux(<Volunteers />)
    })

    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Add')
  })

  it('calls addVolunteer with event data on click', async () => {
    act(() => {
      renderWithRedux(<Volunteers />)
    })
    const firstNameInput = screen.getByRole('textbox', { name: 'firstName' })
    const lastNameInput = screen.getByRole('textbox', { name: 'lastName' })

    const addButton = screen.getByRole('button')

    userEvent.type(firstNameInput, 'testFirstName')
    userEvent.type(lastNameInput, 'testLastName')
    userEvent.click(addButton)

    addVolunteer.mockImplementation((event, navigateTo) => {
      expect(event.firstName).toBe('testFirstName')
      expect(event.lastName).toBe('testLastName')
      expect(typeof navigateTo).toBe('function')
    })

    await waitFor(() => {
      expect(firstNameInput.value).toBe('testFirstName')
      expect(lastNameInput.value).toBe('testLastName')
      expect(addVolunteer).toHaveBeenCalled()
    })
  })
})
