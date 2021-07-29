import React from 'react'

import { SheetHeader } from './sheetHeader.js'

const stories = {
  title: 'Example/SheetHeader',
  component: SheetHeader
}

export default stories

const Template = (args) => <SheetHeader {...args} />

export const sheetHeader = Template.bind({})
