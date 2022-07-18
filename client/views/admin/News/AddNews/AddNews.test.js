import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

import { renderWithRouter } from '../../../../test-utils'

import AddNews from './AddNews'
import { addNews } from './addNewsHelper'

jest.mock('./addNewsHelper')

describe('news form field', () => {
  it('expects input field for title to be empty', () => {
    renderWithRouter(<AddNews />)
    const titleInput = screen.getByRole('textbox', { name: 'News Title' })
    expect(titleInput).toHaveValue('')
  })
})

describe('submit button', () => {
  it('has a submit button', () => {
    renderWithRouter(<AddNews />)
    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Submit')
  })

  it('calls addNews helper with news data on click', async () => {
    addNews.mockImplementation((news, navigateTo) => {
      expect(news.title).toBe('test title')
      expect(typeof navigateTo).toBe('function')
    })

    renderWithRouter(<AddNews />)

    const titleInput = screen.getByRole('textbox', { name: 'News Title' })
    const contentInput = screen.getByRole('textbox', {
      name: 'Content',
    })
    const addButton = screen.getByRole('button')

    userEvent.type(titleInput, 'test title')
    userEvent.type(contentInput, 'content')
    userEvent.click(addButton)

    await waitFor(() => {
      expect(addNews).toHaveBeenCalled()
    })
  })
})
