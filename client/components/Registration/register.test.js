import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import { renderWithRedux } from '../../test-utils'
import Register from './Register'

import { getAllGardens } from '../../pages/Gardens/gardensHelper'

jest.mock('../../pages/Gardens/gardensHelper')
afterEach(() => {
  getAllGardens.mockClear()
})

describe('Register form field', () => {
  getAllGardens.mockImplementation(() => {
    return Promise.resolve([
      {
        id: 1,
        name: 'Kelmarna Gardens',
        address: '12 Hukanui Crescent',
        description:
          'Kelmarna Gardens is a city farm and organic community garden, situated on 4.5 acres of council land in Ponsonby, close to the heart of Auckland City.',
        lat: -36.85137418793577,
        lon: 174.73319270646485,
        url: 'http://www.kelmarnagardens.nz/',
      },
      {
        id: 2,
        name: 'Kingsland Community Orchard',
        address: '48B Bond Street, Kingsland',
        description:
          'A secluded edible oasis in the heart of Kingsland, Auckland. Kingsland Community Orchard; an edible urban garden and orchard located in the heart of Kingsland, Auckland.',
        lat: -36.86983345249252,
        lon: 174.74701843955708,
        url: 'https://www.facebook.com/KCOnz',
      },
    ])
  })
  it('updates correctly on user input', async () => {
    renderWithRedux(<Register location={{ pathname: '/profile' }} />, {
      initialState: {
        user: {
          isAdmin: 0,
        },
      },
    })

    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' })
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' })

    userEvent.type(firstNameInput, 'Mr Cool')
    userEvent.type(lastNameInput, 'Is Cool')

    await waitFor(() => {
      expect(firstNameInput).toHaveValue('Mr Cool')
      expect(lastNameInput).toHaveValue('Is Cool')
    })
  })
  it('"Required" comes up on empty input', async () => {
    const handleSubmit = jest.fn()
    renderWithRedux(
      <Register onSubmit={handleSubmit} location={{ pathname: '/profile' }} />,
      {
        initialState: {
          user: {
            isAdmin: 0,
          },
        },
      }
    )

    userEvent.clear(screen.getByLabelText(/first name/i))
    userEvent.clear(screen.getByLabelText(/last name/i))

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    const element = await screen.findAllByText('Required')
    expect(element[0]).toBeInTheDocument()
  })
  it('message comes up on short input', async () => {
    const handleSubmit = jest.fn()
    renderWithRedux(
      <Register onSubmit={handleSubmit} location={{ pathname: '/profile' }} />,
      {
        initialState: {
          user: {
            isAdmin: 0,
          },
        },
      }
    )

    userEvent.type(screen.getByLabelText(/first name/i), 'a')
    userEvent.type(screen.getByLabelText(/last name/i), 'b')

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    const element = await screen.findAllByText(
      'This must be at least 2 characters long'
    )
    expect(element[0]).toBeInTheDocument()
  })
  it('message comes up on long input', async () => {
    const handleSubmit = jest.fn()
    renderWithRedux(
      <Register onSubmit={handleSubmit} location={{ pathname: '/profile' }} />,
      {
        initialState: {
          user: {
            isAdmin: 0,
          },
        },
      }
    )

    userEvent.type(
      screen.getByLabelText(/first name/i),
      'whatawonderfuldaytobealive'
    )
    userEvent.type(
      screen.getByLabelText(/last name/i),
      'howmanydaysareleftoftheyear'
    )

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    const element = await screen.findAllByText(
      'Sorry, this must be under 15 characters long'
    )
    expect(element[0]).toBeInTheDocument()
  })
  it('The dropdown selection dynamically displays all the garden names', () => {
    act(() => {
      renderWithRedux(<Register />)
    })
    return screen.findAllByRole('option').then((options) => {
      expect(options).toHaveLength(2)
      expect(options[0].textContent).toMatch('Kelmarna Gardens')
      expect(options[1].textContent).toMatch('Kingsland Community Orchard')
      return null
    })
  })
})
