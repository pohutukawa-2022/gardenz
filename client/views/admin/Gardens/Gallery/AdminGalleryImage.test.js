import React from 'react'
import { screen } from '@testing-library/dom'
import { renderWithRedux } from '../../../../test-utils'
import userEvent from '@testing-library/user-event'

import { deleteImgById } from './AdminGalleryHelper'
import AdminGalleryImage from './AdminGalleryImage'

jest.mock('./AdminGalleryHelper')

describe('click on delete button', () => {
  it('does not displays deletion confirmation dialog without clicked trash button', async () => {
    const mockImage = {
      id: 1,
      name: 'Test Picture 1',
      url: 'https://www.google.com/',
      garden_id: 2,
    }

    renderWithRedux(<AdminGalleryImage image={mockImage} />)

    const confirmButtons = await screen.queryByRole('button')
    expect(confirmButtons).toBeNull()
  })

  it('displays deletion confirmation dialog when click trash button', async () => {
    const mockImage = {
      id: 1,
      name: 'Test Picture 1',
      url: 'https://www.google.com/',
      garden_id: 2,
    }

    renderWithRedux(<AdminGalleryImage image={mockImage} />)
    const trashButtons = await screen.findByTestId('button')
    userEvent.click(trashButtons)
    const confirmationDialog = await screen.findByTestId('confirmationDialog')

    const confirmationButtons = await screen.getAllByRole('button')
    expect(confirmationButtons).toHaveLength(2)
    expect(confirmationDialog).toBeTruthy()
  })

  it('function deleteImgById called when click on "Yes"', async () => {
    const mockeLoadImages = jest.fn()
    const mockImage = {
      id: 1,
      name: 'Test Picture 1',
      url: 'https://www.google.com/',
      garden_id: 2,
    }

    renderWithRedux(
      <AdminGalleryImage image={mockImage} loadImages={mockeLoadImages} />
    )
    const trashButtons = await screen.findByTestId('button')
    userEvent.click(trashButtons)
    const confirmButton = await screen.findByTestId('Yes')
    userEvent.click(confirmButton)
    await expect(deleteImgById).toHaveBeenCalled()

    expect(mockeLoadImages).toHaveBeenCalled()
  })

  it('confirmation dialog hidden when click on "No"', async () => {
    const mockImage = {
      id: 1,
      name: 'Test Picture 1',
      url: 'https://www.google.com/',
      garden_id: 2,
    }

    renderWithRedux(<AdminGalleryImage image={mockImage} />)
    const trashButtons = await screen.findByTestId('button')
    userEvent.click(trashButtons)
    const confirmButton = await screen.findByTestId('No')
    userEvent.click(confirmButton)
    const confirmDialog = await screen.queryByTestId('confirmationDialog')
    expect(confirmDialog).toBeNull()
  })
})
