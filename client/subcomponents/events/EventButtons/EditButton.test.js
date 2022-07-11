import React from 'react'

import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

import EditButton from './EditButton'
import { renderWithRouter } from '../../../test-utils'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

// const { id } = jest.mock('react-router-dom', () => {
//   return {
//     useParams: () => '1',
//   }
// })
// const id = jest.mock('react-router', () => ({
//   useParams: jest.fn().mockReturnValue('1'),
// }))

describe('edit button', () => {
  it('has "Edit Event" name from props', () => {
    render(<EditButton />)
    const addButton = screen.getByRole('button')
    expect(addButton).toHaveTextContent('Edit Event')
  })
  it('redirects to /admin/events/:id/edit on click', async () => {
    renderWithRouter(<EditButton />, {
      initialEntries: ['/admin/events/1'],
      route: '/admin/events/:id',
    })
    const editButton = screen.getByRole('button')
    userEvent.click(editButton)

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith(`/admin/events/1/edit`)
    })
  })
})
