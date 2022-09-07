import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AddEvent from './AddButton'
import { renderWithRouter } from '../../../test-utils'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Add button', () => {
  it('button has displays Add Event as text content', () => {
    renderWithRouter(<AddEvent />)
    const addEvent = screen.getByRole('link', { name: 'Add Event' })
    expect(addEvent).toHaveTextContent('Add Event')
    expect(addEvent).toHaveAttribute('href', '/admin/events/add')
  })
})
