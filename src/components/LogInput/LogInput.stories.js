import LogInput from "./LogInput.js";

export default {
  title: "components/LogForm",
  component: LogInput,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <LogInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
