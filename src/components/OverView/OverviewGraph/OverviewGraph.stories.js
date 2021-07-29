import OverviewGraph from './OverviewGraph'

const stories = {
  title: 'Example/Overviewgraph',
  component: OverviewGraph
}

export default stories

const Template = (args) => <OverviewGraph {...args} />

export const MyGraph = Template.bind({})
