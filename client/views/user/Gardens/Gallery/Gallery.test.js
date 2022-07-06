import React from 'react'
import Gallery from './Gallery'

import { render, screen } from '@testing-library/react'

describe('Gallery', () => {
  test('First image in Gallery must have src ="/images/comGardenPlant.png" and alt = "garden image1"', () => {
    render(<Gallery />)
    const firstImage = screen.getAllByRole('img')[0]
    expect(firstImage).toHaveAttribute('src', '/images/comGardenPlant.png')
    expect(firstImage).toHaveAttribute('alt', 'garden image1')
  })
  test('Images in Gallery should be visible', () => {
    render(<Gallery />)
    const secondImage = screen.getAllByRole('img')[1]
    expect(secondImage).toBeVisible(true)
  })
})
