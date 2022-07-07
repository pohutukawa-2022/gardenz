import React from 'react'
import { screen } from '@testing-library/react'

import UserNav from './UserNav'
import { renderWithRouter } from '../../test-utils'

test('User Nav bar contains 5 NavLinks', () => {
  // Arrange
  renderWithRouter(<UserNav />)
  // Act
  const links = screen.getAllByRole('link')
  // Assert
  expect(links).toHaveLength(5)
  expect(links[0]).toHaveTextContent('About Us')
  expect(links[1]).toHaveTextContent('Events')
  expect(links[2]).toHaveTextContent('News')
  expect(links[3]).toHaveTextContent('Gallery')
  expect(links[4]).toHaveTextContent('Shop')
})
