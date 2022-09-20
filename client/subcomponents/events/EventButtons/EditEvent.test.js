import React from 'react'
import { screen } from '@testing-library/react'

import EditButton from './EditEvent'
import { renderWithRouter } from '../../../test-utils'

describe('edit button', () => {
  it('has "Edit Event" name from props', () => {
    renderWithRouter(<EditButton gardenId={1} eventId={1} />)
    const addEvent = screen.getByRole('link', { name: 'Edit Event' })
    expect(addEvent).toHaveAttribute('href', '/admin/gardens/1/events/1/edit')
  })
})
