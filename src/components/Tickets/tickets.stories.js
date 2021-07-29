import React from 'react'

import { Tickets } from './tickets.js'

const stories = {
  title: 'Example/Tickets',
  component: Tickets
}

export default stories

const Template = (args) => <Tickets {...args} />

export const ticketsPage = Template.bind({})
