import React from 'react'
import { screen, render } from '@testing-library/react'
import { renderWithRouter } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

import EditButton from './EditButton'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('edit button', () => {
  it('has "Edit Event" name from props and correct href', () => {
    renderWithRouter(<EditButton eventId={1} />)
    const editEvent = screen.getByRole('link', { name: 'Edit Event' })
    expect(editEvent).toHaveAttribute('href', '/admin/events/1/edit')
  })
})
