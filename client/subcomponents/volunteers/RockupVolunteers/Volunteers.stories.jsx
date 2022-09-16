import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter as Router } from 'react-router-dom'

import RockupVolunteers from './RockupVolunteers'
import { reducers } from '../../../store'

const store = configureStore({
  reducer: reducers,
  preloadedState: { user: {} },
})

export default {
  title: 'Volunteers',
  component: RockupVolunteers,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <Story />
        </Router>
      </Provider>
    ),
  ],
}

const Template = (args) => <RockupVolunteers {...args} />

export const displaysEvent = Template.bind({})
displaysEvent.storyName = 'Form and list'
displaysEvent.args = {
  id: 1,
  volunteers: [
    {
      userId: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      attended: true,
    },
    {
      userId: 2,
      firstName: 'Jone',
      lastName: 'Doe',
      attended: false,
    },
  ],
}
