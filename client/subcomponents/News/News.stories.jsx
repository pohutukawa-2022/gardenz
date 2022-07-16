import React from 'react'

import News from './News'

export default {
  title: 'News/News',
  component: News,
}

const Template = (args) => <News {...args} />

export const short = Template.bind({})
short.storyName = 'Short content'
short.args = {
  news: {
    title: 'Divide & Conquer',
    firstName: 'Napoleon ',
    lastName: 'Bonaparte',
    content: 'A developers best strategy to plan and write code.',
    createdOn: '01/01/2021',
  },
}

export const long = Template.bind({})
long.storyName = 'Long content'
long.args = {
  news: {
    ...short.args.news,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa illo ratione consequatur excepturi expedita omnis corrupti nulla sed consectetur, sunt non cupiditate deleniti quos accusamus quibusdam laudantium est voluptas.',
  },
}
