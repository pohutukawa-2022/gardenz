import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../../../test-utils'
import { userEvent } from '@storybook/testing-library'

import AdminGalleryImage from './AdminGalleryImage'
import AdminGalleryHelper, { deleteImgById } from './AdminGalleryHelper'

jest.mock('./AdminGalleryHelper')

// afterEach(() => {
//   getAllGardens.mockClear()
// })

describe('click on delete button', () => {
  it('click trash button', async () => {
    const user = userEvent.setup()

    const mockCallBack = jest.fn()
    const mockImage = {
      id: 1,
      name: 'Test Picture 1',
      url: 'https://www.google.com/',
      garden_id: 2,
    }

    renderWithRedux(<AdminGalleryImage image={mockImage} />)

    //const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    return screen.findByTestId('button').then((button) => {
      button.setAttribute('onclick', 'mockCallBack')
      user.click(button)
      expect(mockCallBack.mock.calls).toHaveLength(1)
    })
  })

  // it('displays deletion confirmation dialog when clicked trash button', async () => {
  //   // getAllGardens.mockImplementation(() => {
  //   //   return Promise.resolve([])
  //   // })

  //   renderWithRedux(<AdminGalleryImage />)

  //   const list = await screen.findByRole('button')
  //   expect(list).toBeEmptyDOMElement()
  // })

  // it('function deleteImgById called when click on "Yes"', () => {
  //   getAllGardens.mockImplementation(() => {
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
  //     ])
  //   })

  //   renderWithRedux(<AdminGalleryImage />)

  //   return screen.findAllByRole('listitem').then((listItems) => {
  //     expect(listItems).toHaveLength(1)
  //     expect(listItems[0].textContent).toMatch('Test Garden')
  //     expect(getAllGardens).toHaveBeenCalledTimes(1)
  //     return null
  //   })
  // })

  // it('displays information corrctly when array has more than one object', () => {
  //   getAllGardens.mockImplementation(() => {
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

  //   renderWithRedux(<Index />)

  //   return screen.findAllByRole('listitem').then((listItems) => {
  //     expect(listItems).toHaveLength(2)
  //     expect(listItems[0].textContent).toMatch('Test Garden')
  //     expect(listItems[1].textContent).toMatch('Test Garden 2')
  //     expect(getAllGardens).toHaveBeenCalledTimes(1)
  //     return null
  //   })
  // })
})
