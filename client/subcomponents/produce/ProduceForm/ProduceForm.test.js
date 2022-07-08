import { getAllGardens } from '../../../views/user/Gardens/Index/IndexHelper'
import { getProduceTypes } from './AddProduceHelper'
import ProduceForm from './ProduceForm.jsx'
import { render, screen } from '@testing-library/react'

jest.mock('../../../views/user/Gardens/Index/IndexHelper')
jest.mock('./ProduceFormHelper')

// form renders correctly (checkboxes and dropdown)
// mock helpers: getAllGardens(consume), getProduceTypes
//

describe('ProduceForm', () => {
  it('renders dropdown and checkbox options correctly', () => {
    getAllGardens.mockImplementation(() => {
      return Promise.resolve({
        gardens: [
          {
            id: 1,
            name: 'Kelmarna Gardens',
          },
          {
            id: 2,
            name: 'Kingsland Community Orchard',
          },
        ],
      })
    })

    getProduceTypes.mockImplementation(() => {
      return Promise.resolve(['vegetable', 'fruit'])
    })

    render(<ProduceForm />)
  })
})
