import React from 'react'

import EventItem from './EventItem'

export default {
  title: 'Event',
  component: EventItem,
}

const Template = (args) => <EventItem {...args} />

export const displaysEvent = Template.bind({})
displaysEvent.storyName = 'Displays event'
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
  },

  user: {
    token: 'dummy token',
  },
}

export const noToken = Template.bind({})
noToken.storyName = 'Anon User'
noToken.args = {
  garden: {
    address: '12 Morgans street, New Market, Auckland',
  },
  event: {
    id: 1,
    title: 'Where is my banana?',
    volunteersNeeded: 5,
    totalVolunteers: 20,
    date: '20/07/2022',
  },

  user: {
    token: null,
  },
}
