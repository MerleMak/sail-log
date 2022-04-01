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
    boatName: 'Unsinkbar II',
    crewNames: 'Merle, David',
    windSpeed: '15 kn',
    windDirection: 'S',
    waveHeight: '0.5 m',
    notes: 'This is a test',
  },
};
