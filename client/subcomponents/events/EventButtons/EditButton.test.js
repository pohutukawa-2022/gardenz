import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EditButton from './EditButton'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('edit button', () => {
  it('has "Edit Event" name from props', () => {
    render(<EditButton />)
    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Edit Event')
  })
  it('redirects to /admin/events/:id/edit on click', async () => {
    render(<EditButton eventId={1} />, {
      initialEntries: ['/admin/events/1'],
      route: '/admin/events/:id',
    })
    const editButton = screen.getByRole('button')
    userEvent.click(editButton)

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/admin/events/1/edit`)
  })
})
