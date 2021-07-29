import React from 'react'

import { Header } from './header.js'

const stories = {
  title: 'Example/TicketsHeader',
  component: Header
}

export default stories

const Template = (args) => <Header {...args} />

export const header = Template.bind({})
