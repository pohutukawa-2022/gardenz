import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import EventItem from './AdminEventItem'

export default {
  title: 'Admin event',
  component: EventItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template = (args) => <EventItem {...args} />

export const displaysEvent = Template.bind({})
displaysEvent.storyName = 'Displays event'
displaysEvent.args = {
  event: {
    id: 1,
    title: 'title',
    date: 'date',
    volunteersNeeded: 2,
    totalVolunteers: 10,
    status: 'status',
    time: 'time'
  },
  address: 'address'
}
