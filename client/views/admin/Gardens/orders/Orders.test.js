import Orders from './Orders'
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

test('include text', () => {
  render(<Orders />)
  // Get the starting paragraph and value
  const paragraph = screen.getByText('this is a test placeholder', {
    exact: false,
  })
  expect(paragraph.textContent).toMatch('')
})
