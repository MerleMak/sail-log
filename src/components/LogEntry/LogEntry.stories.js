import LogEntry from './LogEntry';

export default {
  title: 'components/LogEntry',
  component: LogEntry,
  argTypes: {},
};

const Template = args => <LogEntry {...args} />;

export const Default = Template.bind({});
Default.args = {
  notes: '30.03.2022: wind direction SSW',
};
