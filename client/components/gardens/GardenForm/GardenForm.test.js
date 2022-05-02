import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GardenForm from './GardenForm'

describe('garden form field', () => {
  it('updates correctly on user input', async () => {
    const emptyForm = {
      name: '',
      description: '',
      address: '',
    }
    render(<GardenForm formData={emptyForm} />)

    const descriptionInput = screen.getByRole('textbox', {
      name: 'Description',
    })

    userEvent.type(descriptionInput, 'cool garden, yozza!')

    await waitFor(() => {
      expect(descriptionInput).toHaveTextContent(/yozza!/)
    })
  })

  it('required comes up on invalid input', async () => {
    const handleSubmit = jest.fn()
    const mockForm = {
      name: 'mock name',
      description: 'garden description',
      address: 'garden address',
    }
    render(<GardenForm onSubmit={handleSubmit} formData={mockForm} />)
    userEvent.clear(screen.getByLabelText(/name/i))
    userEvent.clear(screen.getByLabelText(/description/i))
    userEvent.clear(screen.getByLabelText(/address/i))

    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    const ele = await screen.findAllByText('Required')
    expect(ele[0]).toBeInTheDocument()
  })
})
