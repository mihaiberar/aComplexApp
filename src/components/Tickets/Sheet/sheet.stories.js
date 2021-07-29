import React from 'react'

import { Sheet } from './sheet.js'

const stories = {
  title: 'Example/Sheet',
  component: Sheet
}

export default stories

const Template = (args) => <Sheet {...args} />

export const sheetPage = Template.bind({})
