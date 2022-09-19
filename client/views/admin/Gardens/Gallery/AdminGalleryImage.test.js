import React from 'react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../../../test-utils'
import AdminGalleryImage from './AdminGalleryImage'

describe('Interactions with buttons on GalleryImage.', () => {
  it('Shows confirm dialog when delete button is pressed.', async () => {
    const image = {
      id: 1,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    }

    renderWithRedux(<AdminGalleryImage loadImages={() => {}} image={image} />)

    const deleteButton = await screen.findByTestId('delete-button')
    userEvent.click(deleteButton)

    const confirmDialog = await screen.findByText('Delete?')
    expect(confirmDialog).toBeInTheDocument()
  })
})
