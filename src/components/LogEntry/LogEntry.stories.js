import LogEntry from './LogEntry';

export default {
  title: 'components/LogEntry',
  component: LogEntry,
  argTypes: {},
};

const Template = args => <LogEntry {...args} />;

export const Default = Template.bind({});
Default.args = {
  logEntryData: {
    notes: 'This is a test',
  },
};
