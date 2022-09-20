import React from 'react'
import { screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../test-utils'

import DeliveryForm from './DeliveryForm'
// import { useNavigate } from 'react-router-dom'

describe('delivery form field', () => { 
  it('Required error on invalid input, or no input at all', async () => {
    const handleSubmit = jest.fn()
    const mockForm = {
      street: 'street name',
      suburb: 'grey lynn',
      city: 'anywhere',
      postcode: '1234',
    }

    renderWithRouter(
      <DeliveryForm onSubmit={handleSubmit} formData={mockForm} />
    )
    userEvent.clear(screen.getByPlaceholderText('street'))
    userEvent.clear(screen.getByPlaceholderText('suburb'))
    userEvent.clear(screen.getByPlaceholderText('city'))
    userEvent.clear(screen.getByPlaceholderText('postcode'))

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
      it('On Submit navigates to new page', async () => {
    
    const mockedUsedNavigate = jest.fn()
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUsedNavigate,
    }))

    expect(mockedUsedNavigate).toHaveBeenCalled()
  })
})