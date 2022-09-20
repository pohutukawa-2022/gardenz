import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'

import ShopItem from './ShopItem'

describe('shop front', () => {
  it('shop page should display a placeholder paragraph', async () => {
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
    render(<ShopItem product={product} />)

    const itemParagraph = await screen.findByText('large veggie box')

    expect(itemParagraph).toBeInTheDocument()
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
    render(<ShopItem key={product.id} product={product} />)
    const button = screen.getByRole('button', { name: '+' })
    const quantityDisplay = screen.getByRole('heading', { name: '0' })

    userEvent.click(button)
    expect(quantityDisplay.textContent).toMatch('1')
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
    render(<ShopItem key={product.id} product={product} />)
    const button = screen.getByRole('button', { name: '-' })
    const quantityDisplay = screen.getByRole('heading', { name: '0' })

    userEvent.click(button)
    expect(quantityDisplay.textContent).toMatch('0')
  })
})
