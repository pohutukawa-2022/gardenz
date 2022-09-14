import React from 'react'

import GardenHeader from './GardenHeader'

export default {
  title: 'GardenHeader',
  component: GardenHeader,
}

const Template = (args) => <GardenHeader {...args} />

export const displaysGardenHeader = Template.bind({})

displaysGardenHeader.storyName = 'Displays event'
displaysGardenHeader.args = {
  name: 'mock name',
  url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
}
