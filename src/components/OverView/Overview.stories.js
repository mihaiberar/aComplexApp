import Overview from './Overview'

const stories = {
  title: 'Example/Overview',
  component: Overview
}

export default stories

const Template = (args) => <Overview {...args} />

export const MyOverview = Template.bind({})
