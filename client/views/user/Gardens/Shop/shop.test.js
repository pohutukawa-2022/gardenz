import Shop from './Shop'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import '@testing-library/jest-dom'

import { renderWithRedux } from '../../../../test-utils'
import store from '../../../../store'
import ProductList from './ProductList'

describe('shop front', () => {
  it('shope page should display a placeholder paragraph', async () => {
    renderWithRedux(<Shop />, { store, initialState: { garden: {} } })

    const paragraph = await screen.findByText('large veggie box')
    expect(paragraph).toBeInTheDocument()
  })

  it('shope page display a placeholder paragraph', async () => {
    renderWithRedux(<Shop />, { store, initialState: { garden: {} } })

    const paragraph = await screen.findByText('small veggie box')
    expect(paragraph).toBeInTheDocument()
  })

  it('button increment up', () => {
    const product = {
      id: 1,
      productId: 2,
      name: 'large veggie box',
      description: 'a large box',
      price: 29,
      image:
        'https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832',
      stock: 15,
    }
    render(<ProductList key={product.id} product={product} />)
    const button = screen.getByRole('button', { name: '+' })
    const quantityDisplay = screen.getByRole('heading', { name: '1' })

    userEvent.click(button)
    expect(quantityDisplay.textContent).toMatch('2')
  })

  it('button decrement doesnt go below one', () => {
    const product = {
      id: 1,
      productId: 2,
      name: 'large veggie box',
      description: 'a large box',
      price: 29,
      image:
        'https://cdn.shopify.com/s/files/1/0386/4602/2188/products/WebVersions4.jpg?v=1650839475&width=832',
      stock: 15,
    }
    render(<ProductList key={product.id} product={product} />)
    const button = screen.getByRole('button', { name: '-' })
    const quantityDisplay = screen.getByRole('heading', { name: '1' })

    userEvent.click(button)
    expect(quantityDisplay.textContent).toMatch('1')
  })
})