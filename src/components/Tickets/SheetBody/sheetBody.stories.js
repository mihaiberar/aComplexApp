import React from 'react'

import { SheetBody } from './sheetBody.js'

const stories = {
  title: 'Example/SheetBody',
  component: SheetBody
}

export default stories

const Template = (args) => <SheetBody {...args} />

export const sheetBody = Template.bind({})
