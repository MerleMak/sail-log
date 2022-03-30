import LogEntryList from './LogEntryList';

export default {
  title: 'components/LogEntryList',
  component: LogEntryList,
  argTypes: {},
};

const Template = args => <LogEntryList {...args} />;

export const Default = Template.bind({});
Default.args = {};
