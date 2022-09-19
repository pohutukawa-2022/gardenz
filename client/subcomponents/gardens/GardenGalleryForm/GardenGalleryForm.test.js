import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GardenGalleryForm from './GardenGalleryForm'
import { BrowserRouter } from 'react-router-dom'

describe('gallery update form', () => {
  it('updates correctly on user input', async () => {
    const emptyForm = {
      name: '',
      description: '',
      url: '',
    }
    render(
      <BrowserRouter>
        <GardenGalleryForm formData={emptyForm} />{' '}
      </BrowserRouter>
    )

    const nameInput = screen.getByRole('textbox', { name: 'Photo name' })
    const descriptionInput = screen.getByRole('textbox', {
      name: 'Description',
    })

    userEvent.type(nameInput, 'test title')
    userEvent.type(descriptionInput, 'interesting')

    await waitFor(() => {
      expect(nameInput).toHaveValue('test title')
      expect(descriptionInput).toHaveValue('interesting')
    })
  })
})
