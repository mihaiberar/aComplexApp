import UnresolvedTickets from './UnresolvedTickets'

const stories = {
  title: 'Example/UnresolvedTickets',
  component: UnresolvedTickets
}

export default stories

const Template = (args) => <UnresolvedTickets {...args} />

export const myTickets = Template.bind({})
