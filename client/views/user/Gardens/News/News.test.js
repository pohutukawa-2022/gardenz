import React from 'react'

import { getNews } from './newsHelper'
import { getGarden } from '../../../../hooks/useGarden/useGardenHelper'
import { renderWithRedux } from '../../../../test-utils'
import News from './News'
import { waitFor, screen } from '@testing-library/react'

jest.mock('./newsHelper')
jest.mock('../../../../hooks/useGarden/useGardenHelper')
describe('List of news', () => {
  const fakeNews = [
    {
      id: 1,
      gardenId: 1,
      author: 2,
      title: 'test title1',
      createdOn: '21/02/2022',
      content: 'test1 content',
      firstName: 'test1 firstName',
      lastName: 'test1 lastName',
    },
    {
      id: 2,
      gardenId: 1,
      author: 2,
      title: 'test title2',
      createdOn: '21/02/2022',
      content: 'test2 content',
      firstName: 'test2 firstName',
      lastName: 'test2 lastName',
    },
  ]

  const fakeGarden = { name: 'FakeGarden', imageHeaderUrl: '' }

  it('props send correct data', async () => {
    getNews.mockImplementation(() => Promise.resolve(fakeNews))
    getGarden.mockImplementation(() => Promise.resolve(fakeGarden))

    renderWithRedux(<News />, {
      initialState: { user: { isAdmin: true } },
      initialEntries: ['/gardens/1/news'],
      route: '/gardens/:id/news',
    })

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith('1')
    })

    // TODO: assert that NewsList component is rendered
    const title = await screen.getByRole('heading', { name: 'test title1' })
    const image = await screen.getAllByRole('img')[0]
    const button = await screen.getAllByLabelText('share button')[0]
    const newDate = await screen.getAllByText('February 21,2022')[0]

    expect(title.textContent).toMatch('test title1')
    expect(image).toHaveAttribute(
      'src',
      'https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2019/04/prepare-for-your-summer-garden-now.jpg?mw=1600'
    )
    expect(image).toHaveAttribute('alt', 'gardening')
    expect(button).toBeVisible(true)
    expect(newDate).toBeInTheDocument()
  })
})
