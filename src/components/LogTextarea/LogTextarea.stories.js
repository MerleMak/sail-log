import LogTextarea from "./LogTextarea.js";

export default {
  title: "components/LogForm",
  component: LogTextarea,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <LogTextarea {...args} />;

export const Default = Template.bind({});
Default.args = {};
