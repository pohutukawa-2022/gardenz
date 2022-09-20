import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../../../test-utils'

import GardensList from './Index'
import { getAllGardens } from './IndexHelper'

jest.mock('./IndexHelper')

afterEach(() => {
  getAllGardens.mockClear()
})

describe('list of gardens', () => {
  it('displays information correctly when array is empty', async () => {
    getAllGardens.mockImplementation(() => {
      return Promise.resolve([])
    })

    renderWithRedux(<GardensList />)

    const list = await screen.findByRole('list')
    expect(list).toBeEmptyDOMElement()
  })

  it('displays information corrctly when array has one object', () => {
    getAllGardens.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 0,
          name: 'Test Garden',
          address: '123 Sesame St',
          description: 'A test run garden for testing out gardening.',
          lat: 123,
          lon: 321,
          url: 'https://www.google.com/',
        },
      ])
    })

    renderWithRedux(<GardensList />)

    return screen.findAllByRole('listitem').then((listItems) => {
      expect(listItems).toHaveLength(1)
      expect(listItems[0].textContent).toMatch('Test Garden')
      expect(getAllGardens).toHaveBeenCalledTimes(1)
      return null
    })
  })

  it('displays information corrctly when array has more than one object', () => {
    getAllGardens.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 0,
          name: 'Test Garden',
          address: '123 Sesame St',
          description: 'A test run garden for testing out gardening.',
          lat: 123,
          lon: 321,
          url: 'https://www.google.com/',
        },
        {
          id: 1,
          name: 'Test Garden 2',
          address: '234 Sesame St',
          description: 'A second test run garden for testing out gardening.',
          lat: 234,
          lon: 432,
          url: 'https://www.google.com/',
        },
      ])
    })

    renderWithRedux(<GardensList />)

    return screen.findAllByRole('listitem').then((listItems) => {
      expect(listItems).toHaveLength(2)
      expect(listItems[0].textContent).toMatch('Test Garden')
      expect(listItems[1].textContent).toMatch('Test Garden 2')
      expect(getAllGardens).toHaveBeenCalledTimes(1)
      return null
    })
  })
})
