import LogEntryList from './LogEntryList';

export default {
  title: 'components/LogEntryList',
  component: LogEntryList,
  argTypes: {},
};

const Template = args => <LogEntryList {...args} />;

export const Default = Template.bind({});
Default.args = {
  logEntries: [
    {
      notes: '30.03.2022: wind direction SSW',
    },
    {
      notes: '29.03.2022: wind direction W',
    },
  ],
};
