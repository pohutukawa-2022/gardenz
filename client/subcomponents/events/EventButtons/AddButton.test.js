import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

import AddButton from './AddButton'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Add button', () => {
  it('button has displays Add Event as text content', () => {
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
