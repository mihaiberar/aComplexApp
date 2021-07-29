import DataColumn from './DataColumn'

const stories = {
  title: 'Example/DataColumn',
  component: DataColumn
}

export default stories

const Template = (args) => <DataColumn {...args} />

export const MyColumns = Template.bind({})
