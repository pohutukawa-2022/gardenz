import React from 'react'
import AdminEventItem from './AdminEventItem'
import { renderWithRouter } from '../../../test-utils'

export default {
  title: 'Admin Event',
  component: AdminEventItem,
}

const Template = (args) => renderWithRouter(<AdminEventItem {...args} />)

export const displaysEvent = Template.bind({})
displaysEvent.storyName = 'Displays Admin Event'
displaysEvent.args = {
  garden: {
    address: '12 Morgans street, New Market, Auckland',
  },
  event: {
    id: 1,
    title: 'Where is my banana?',
    volunteersNeeded: 5,
    totalVolunteers: 20,
    date: '20/07/2022',
    status: '',
    time: '',
  },

  user: {
    isAdmin: true,
    token: 'dummy token',
  },
}

// id, title, date, volunteersNeeded, totalVolunteers, status, time
