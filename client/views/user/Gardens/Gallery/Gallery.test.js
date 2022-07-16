import Gallery from './Gallery'
import { screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import { renderWithRedux } from '../../../../test-utils'
import store from '../../../../store'

describe('Gallery', () => {
  test('First image in Gallery must have src ="/images/comGardenPlant.png" and alt = "garden image1"', () => {
    renderWithRedux(<Gallery />, { store, initialState: { garden: {} } })

    const firstImage = screen.getAllByRole('img')[0]
    expect(firstImage).toHaveAttribute('src', '/images/comGardenPlant.png')
    expect(firstImage).toHaveAttribute('alt', 'garden image1')
  })
  test('Images in Gallery should be visible', () => {
    renderWithRedux(<Gallery />, { store, initialState: { garden: {} } })

    const secondImage = screen.getAllByRole('img')[1]
    expect(secondImage).toBeVisible(true)
  })
})
