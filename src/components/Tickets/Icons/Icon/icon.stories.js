import React from 'react'

import { Icon } from './icon.js'

const stories = {
  title: 'Example/TicketsIcon',
  component: Icon
}

export default stories

const Template = (args) => <Icon {...args} />

export const icon = Template.bind({})

icon.args = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  d:
    'M9.33332 1.3335H3.99999C3.26666 1.3335 2.67332 1.9335 2.67332 2.66683L2.66666 13.3335C2.66666 14.0668 3.25999 14.6668 3.99332 14.6668H12C12.7333 14.6668 13.3333 14.0668 13.3333 13.3335V5.3335L9.33332 1.3335ZM10.6667 10.6668H8.66666V12.6668H7.33332V10.6668H5.33332V9.3335H7.33332V7.3335H8.66666V9.3335H10.6667V10.6668ZM8.66666 6.00016V2.3335L12.3333 6.00016H8.66666Z',
  pathFill: '#C5C7CD'
}
