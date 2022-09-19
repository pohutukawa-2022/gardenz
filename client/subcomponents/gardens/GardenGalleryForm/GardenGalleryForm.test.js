import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GardenGalleryForm from './GardenGalleryForm'
import { BrowserRouter } from 'react-router-dom'
// import { updateGalleryImage } from '../../../'

describe('gallery update form', () => {
  it('updates correctly on user input', async () => {
    const emptyForm = {
      name: '',
      description: '',
      url: '',
    }
    render(
      <BrowserRouter>
        <GardenGalleryForm formData={emptyForm} />
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

  it('required comes up on invalid input', async () => {
    const handleSubmit = jest.fn()
    const mockForm = {
      name: 'Image 1',
      description: 'really cool',
      url: 'http://benson.jpg',
    }
    render(
      <BrowserRouter>
        <GardenGalleryForm formData={mockForm} onSubmit={handleSubmit} />
      </BrowserRouter>
    )
    userEvent.clear(screen.getByLabelText(/Photo name/i))
    userEvent.clear(screen.getByLabelText(/Description/i))
    userEvent.clear(screen.getByLabelText(/URL Path/i))
    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    const ele = await screen.findAllByText('Required')
    expect(ele[0]).toBeInTheDocument()
  })

  it('rejects incorrect url', async () => {
    const handleSubmit = jest.fn()
    const url = 'http://www.beson.com/1'
    render(
      <BrowserRouter>
        <GardenGalleryForm onSubmit={handleSubmit} />
      </BrowserRouter>
    )
    const urlInput = screen.getByRole('textbox', { name: 'URL Path' })

    userEvent.type(urlInput, url)
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
    const ele = await screen.findAllByText('Not a valid image url!')
    expect(ele[0]).toBeInTheDocument()
  })

  it('Calls updateGalleryImage with event data on click', async () => {
    const handleSubmit = jest.fn()

    render(
      <BrowserRouter>
        <GardenGalleryForm submitEvent={handleSubmit} />
      </BrowserRouter>
    )

    const nameInput = screen.getByRole('textbox', { name: 'Photo name' })
    const descriptionInput = screen.getByRole('textbox', {
      name: 'Description',
    })
    const urlInput = screen.getByRole('textbox', { name: 'URL Path' })
    const submitButton = screen.getByRole('button', { name: /submit/i })

    const testName = 'hello'
    const testDesc = 'testing 123'
    const testUrl = 'http://hello.jpg'

    userEvent.type(nameInput, testName)
    userEvent.type(descriptionInput, testDesc)
    userEvent.type(urlInput, testUrl)
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
    })
  })
})
