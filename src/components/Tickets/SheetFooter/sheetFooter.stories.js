import React from 'react'

import { SheetFooter } from './sheetFooter.js'

const stories = {
  title: 'Example/SheetFooter',
  component: SheetFooter
}

export default stories

const Template = (args) => <SheetFooter {...args} />

export const sheetFooter = Template.bind({})
