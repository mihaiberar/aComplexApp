import TaskRow from './TaskRow'

const stories = {
  title: 'Example/TaskRow',
  component: TaskRow
}

export default stories

const Template = (args) => <TaskRow {...args} />

export const Finish = Template.bind({})
Finish.args = {
  ticketAction: 'Finish ticket update',
  buttonType: 'Urgent'
}

export const NewTicket = Template.bind({})
NewTicket.args = {
  ticketAction: 'Create New Ticket',
  buttonType: 'New'
}
