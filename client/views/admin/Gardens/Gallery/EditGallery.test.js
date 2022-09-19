import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../../../test-utils'
import EditGallery from './EditGallery'
import userEvent from '@testing-library/user-event'
import { fireEvent, waitFor } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'
import { updateGalleryImage } from './EditGalleryHelper'

jest.mock('./EditGalleryHelper')

describe('form', () => {
  it('form title is correct', async () => {
    act(() => {
      renderWithRouter(<EditGallery />)
    })
    await waitFor(() => {
      const header = screen.getByRole('heading', {
        name: 'Add To Your Gallery',
      })
      expect(header).toBeDefined()
    })
  })
})
