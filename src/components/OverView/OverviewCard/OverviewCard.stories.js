import OverviewCard from './OverviewCard'

const stories = {
  title: 'Example/OverviewCard',
  component: OverviewCard
}

export default stories

const Template = (args) => <OverviewCard {...args} />

export const Unresolved = Template.bind({})
Unresolved.args = {
  field: 'Unresolved',
  value: '60'
}

export const Overdue = Template.bind({})
Overdue.args = {
  field: 'Overdue',
  value: '16'
}
