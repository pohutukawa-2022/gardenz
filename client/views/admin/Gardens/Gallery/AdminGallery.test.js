import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../../../test-utils'
import { getGalleryById } from './AdminGalleryHelper'
import AdminGallery from './AdminGallery'

jest.mock('./AdminGalleryHelper')

afterEach(() => {
  getGalleryById.mockClear()
})

describe('list of pictures in the gardens', () => {
  it('displays information corrctly when array has one object', () => {
    getGalleryById.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 0,
          name: 'Test Garden',
          url: 'https://www.google.com/',
          garden_id: 2,
        },
      ])
    })

    renderWithRedux(<AdminGallery />)

    return screen.findAllByRole('img').then((image) => {
      console.log(image)
      expect(image).toHaveLength(1)
      expect(image[0]).toHaveAttribute('src', 'https://www.google.com/')
      expect(getGalleryById).toHaveBeenCalledTimes(1)
      return null
    })
  })

  // it('displays information corrctly when array has more than one object', () => {
  //   getGalleryById.mockImplementation(() => {
  //     return Promise.resolve([
  //       {
  //         id: 0,
  //         name: 'Test Garden',
  //         address: '123 Sesame St',
  //         description: 'A test run garden for testing out gardening.',
  //         lat: 123,
  //         lon: 321,
  //         url: 'https://www.google.com/',
  //       },
  //       {
  //         id: 1,
  //         name: 'Test Garden 2',
  //         address: '234 Sesame St',
  //         description: 'A second test run garden for testing out gardening.',
  //         lat: 234,
  //         lon: 432,
  //         url: 'https://www.google.com/',
  //       },
  //     ])
  //   })

  //   renderWithRedux(<AdminGallery />)

  //   return screen.findAllByRole('listitem').then((listItems) => {
  //     expect(listItems).toHaveLength(2)
  //     expect(listItems[0].textContent).toMatch('Test Garden')
  //     expect(listItems[1].textContent).toMatch('Test Garden 2')
  //     expect(getAllGardens).toHaveBeenCalledTimes(1)
  //     return null
  //   })
  // })
})
