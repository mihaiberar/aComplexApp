import OverviewCardList from './OverviewCardList'

const stories = {
  title: 'Example/OverviewCardList',
  component: OverviewCardList
}

export default stories

const Template = (args) => <OverviewCardList {...args} />

export const MyList = Template.bind({})
