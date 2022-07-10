import Shop from './Shop'
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

test('shope page should display a placeholder paragraph', () => {
  render(<Shop />)
  const paragraph = screen.getByText('A shop will be here')
  expect(paragraph).toBeInTheDocument()
})
