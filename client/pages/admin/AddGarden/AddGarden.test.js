import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

import AddGarden from './AddGarden'
import { addGarden } from './addGardenHelper'

jest.mock('./addGardenHelper')

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('form', () => {
  it('is empty', () => {
    render(<AddGarden />)

    const descriptionInput = screen.getByRole('textbox', {
      name: 'Description',
    })
    expect(descriptionInput).toHaveValue('')
  })
})

describe('submit button', () => {
  it('has "Create Garden" name from props', () => {
    render(<AddGarden />)
    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Submit')
  })

  it('calls addGarden helper with garden data on click', async () => {
    addGarden.mockImplementation((garden) => {
      expect(garden.name).toBe('test name')
    })
    render(<AddGarden />)

    const nameInput = screen.getByRole('textbox', { name: 'Garden name' })
    const descriptionInput = screen.getByRole('textbox', {
      name: 'Description',
    })
    const addressInput = screen.getByRole('textbox', {
      name: 'Garden address',
    })
    const addButton = screen.getByRole('button')

    userEvent.type(nameInput, 'test name')
    userEvent.type(descriptionInput, 'description')
    userEvent.type(addressInput, 'address')
    userEvent.click(addButton)

    await waitFor(() => {
      expect(addGarden).toHaveBeenCalled()
      expect(mockedUsedNavigate).toHaveBeenCalled()
    })
  })
})
