import React from 'react'

import { AddSortFilter } from './addSortFilter.js'

const stories = {
  title: 'Example/AddSortFilter',
  component: AddSortFilter
}

export default stories

const Template = (args) => <AddSortFilter {...args} />

export const addSortFilter = Template.bind({})
