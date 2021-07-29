import React from 'react'

import { Button } from './Button'

const stories = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    label: { control: 'String' }
  }
}

export default stories

const Template = (args) => <Button {...args} />

export const High = Template.bind({})
High.args = {
  color: '#F12B2C',
  label: 'High'
}

export const Low = Template.bind({})
Low.args = {
  color: '#FEC400',
  label: 'Low'
}

export const Normal = Template.bind({})
Normal.args = {
  color: '#29CC97',
  label: 'Normal'
}

export const Urgent = Template.bind({})
Urgent.args = {
  color: '#FEC400',
  label: 'Urgent'
}

export const New = Template.bind({})
New.args = {
  color: '#29CC97',
  label: 'New'
}

export const Default = Template.bind({})
Default.args = {
  color: '#F0F1F7',
  label: 'Default'
}
