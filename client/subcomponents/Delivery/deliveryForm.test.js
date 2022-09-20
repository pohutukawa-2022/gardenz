import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../test-utils'

import DeliveryForm from './DeliveryForm'

describe('delivery form field', () => {
  it('updates correctly on user input', async () => {
    const emptyForm = {
      street: '',
      suburb: '',
      city: '',
      postcode: '',
      deliveryInstructions: '',
      deliveryDay: '',
    }
    renderWithRouter(<DeliveryForm formData={emptyForm} />)

    const streetInput = screen.getByPlaceholderText('street')
    const suburbInput = screen.getByPlaceholderText('suburb')
    const cityInput = screen.getByPlaceholderText('city')
    const postcodeInput = screen.getByPlaceholderText('postcode')
    const deliveryInstructionsInput = screen.getByPlaceholderText(
      'deliveryInstructions'
    )

    userEvent.type(streetInput, 'test street')
    userEvent.type(suburbInput, 'test suburb')
    userEvent.type(cityInput, 'test city')
    userEvent.type(postcodeInput, '1234')
    userEvent.type(deliveryInstructionsInput, 'test delivery instructions')

    await waitFor(() => {
      expect(streetInput).toHaveValue('test street')
      expect(suburbInput).toHaveValue('test suburb')
      expect(cityInput).toHaveValue('test city')
      expect(postcodeInput).toHaveValue('1234')
      expect(deliveryInstructionsInput).toHaveValue(
        'test delivery instructions'
      )
    })
  })
})
