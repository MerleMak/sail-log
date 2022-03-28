import LogForm from "./LogForm.js";

export default {
  title: "components/LogForm",
  component: LogForm,
  argTypes: {
    //  onSubmit: 'onSubmit',
  },
};

const Template = (args) => <LogForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
