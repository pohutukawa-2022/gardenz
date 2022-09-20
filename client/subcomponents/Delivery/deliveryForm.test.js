import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { renderWithRouter } from '../../test-utils'
import userEvent from '@testing-library/user-event'

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

    userEvent.click(screen.getByRole('button', { type: /submit/i }))

    const ele = await screen.findAllByText('Required')

    expect(ele).toHaveLength(4)
    expect(ele[0]).toBeInTheDocument()
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
