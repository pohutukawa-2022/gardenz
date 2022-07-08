import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AdminNav from './AdminNav'

describe('AdminNav', () => {
  test('Links to have assigned text content', () => {
    render(
      <BrowserRouter>
        <AdminNav />
      </BrowserRouter>
    )
    {
      const links = screen.getAllByRole('listitem')
      expect(links).toHaveLength(6)
      expect(links[0]).toHaveTextContent('Update Produce List')
      expect(links[1]).toHaveTextContent('Add/Edit Events')
      expect(links[2]).toHaveTextContent('Post News')
      expect(links[3]).toHaveTextContent('Update Gallery')
      expect(links[4]).toHaveTextContent('Manage Order')
      expect(links[5]).toHaveTextContent('Change Garden')
    }
  })
})
