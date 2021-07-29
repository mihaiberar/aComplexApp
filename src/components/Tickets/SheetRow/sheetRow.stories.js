import React from 'react'

import { SheetRow } from './sheetRow.js'

const stories = {
  title: 'Example/SheetRow',
  component: SheetRow
}

export default stories

const Template = (args) => <SheetRow {...args} />

export const sheetRow = Template.bind({})
