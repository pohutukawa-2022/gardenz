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
          name: 'Test Picture',
          url: 'https://www.google.com/',
          garden_id: 2,
        },
      ])
    })

    renderWithRedux(<AdminGallery />)

    return screen.findAllByRole('img').then((image) => {
      expect(image).toHaveLength(1)
      expect(image[0]).toHaveAttribute('src', 'https://www.google.com/')
      expect(getGalleryById).toHaveBeenCalledTimes(1)
      return null
    })
  })

  it('displays information corrctly when array has more than one object', () => {
    getGalleryById.mockImplementation(() => {
      return Promise.resolve([
        {
          id: 1,
          name: 'Test Picture 1',
          url: 'https://www.google.com/',
          garden_id: 2,
        },
        {
          id: 2,
          name: 'Test Picture 2',
          url: 'https://www.ggle.com/',
          garden_id: 2,
        },
      ])
    })

    renderWithRedux(<AdminGallery />)

    return screen.findAllByRole('img').then((images) => {
      expect(images).toHaveLength(2)
      expect(images[0]).toHaveAttribute('src', 'https://www.google.com/')
      expect(images[1]).toHaveAttribute('src', 'https://www.ggle.com/')
      expect(getGalleryById).toHaveBeenCalledTimes(1)
      return null
    })
  })
})
