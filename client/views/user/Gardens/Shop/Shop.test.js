import Shop from './Shop'
import { screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import { renderWithRedux } from '../../../../test-utils'
import store from '../../../../store'

test('shope page should display a placeholder paragraph', async () => {
  renderWithRedux(<Shop />, { store, initialState: { garden: {} } })

  const paragraph = await screen.findByText('A shop will be here')
  expect(paragraph).toBeInTheDocument()
})
