import React from 'react'
import ProduceForm from './ProduceForm.jsx'
import { render, screen } from '@testing-library/react'

describe('ProduceForm', () => {
  it('renders dropdown options correctly', () => {
    const produceTypes = [
      {
        id: 1,
        name: 'veggies',
      },
      {
        id: 2,
        name: 'fruits',
      },
    ]

    const gardens = []

    render(<ProduceForm gardens={gardens} produceTypes={produceTypes} />)

    const dropdownOptions = screen.getAllByRole('option')

    expect(dropdownOptions).toHaveLength(produceTypes.length + 1)
    expect(dropdownOptions[0].text).toBe('')
    expect(dropdownOptions[1].text).toBe('veggies')
    expect(dropdownOptions[2].text).toBe('fruits')
  })

  it('renders checkbox options correctly', () => {
    const gardens = [
      {
        id: 1,
        name: 'Kelmarna Gardens',
      },
      {
        id: 2,
        name: 'Kingsland Community Orchard',
      },
    ]

    const produceTypes = []

    render(<ProduceForm gardens={gardens} produceTypes={produceTypes} />)

    const checkboxOptions = screen.getAllByRole('listitem')
    expect(checkboxOptions).toHaveLength(gardens.length)
    expect(checkboxOptions[0].textContent).toBe('Kelmarna Gardens')
    expect(checkboxOptions[1].textContent).toBe('Kingsland Community Orchard')
  })

  it.todo('Submit button calls correct handler')
})
