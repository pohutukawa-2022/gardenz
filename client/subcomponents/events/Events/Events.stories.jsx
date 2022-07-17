import React from 'react'

import Events from './Events'

export default {
  title: 'Events',
  component: Events,
}

const Template = (args) => <Events {...args} />

export const displaysEvents = Template.bind({})
displaysEvents.storyName = 'Displays events'
displaysEvents.args = {
  garden: {
    address: '12 Morgans street, New Market, Auckland',
  },
  events: [
    {
      id: 1,
      title: 'Where is my banana?',
      volunteersNeeded: 5,
      totalVolunteers: 20,
      date: '20/07/2022',
    },
    {
      id: 2,
      title: 'Where is my banana?',
      volunteersNeeded: 5,
      totalVolunteers: 20,
      date: '20/07/2022',
    },
    {
      id: 3,
      title: 'Where is my banana?',
      volunteersNeeded: 5,
      totalVolunteers: 20,
      date: '20/07/2022',
    },
    {
      id: 4,
      title: 'Where is my banana?',
      volunteersNeeded: 5,
      totalVolunteers: 20,
      date: '20/07/2022',
    },
  ],

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
  events: [
    {
      id: 1,
      title: 'Where is my banana?',
      volunteersNeeded: 5,
      totalVolunteers: 20,
      date: '20/07/2022',
    },
  ],
  user: {
    token: null,
  },
}

export const noEvents = Template.bind({})
noEvents.storyName = 'No events'
noEvents.args = {
  garden: {
    address: '12 Morgans street, New Market, Auckland',
  },
  events: [],
  user: {
    token: null,
  },
}
