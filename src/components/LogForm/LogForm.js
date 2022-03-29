import styled from "styled-components";
// import LogInput from "../LogInput/LogInput";
import LogTextarea from "../LogTextarea/LogTextarea";
import Button from "../Button/Button";

export default function LogForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const textareaElement = form.elements["notes"];
    onSubmit(textareaElement.value);
    form.reset();
  }
  return (
    <Form
      autoComplete="off"
      aria-label="Create-a-new-log-entry"
      onSubmit={handleSubmit}
    >
      <LogTextarea
        labelText="Notes:"
        textareaHint="..type information like wind direction, wave size.."
        name="notes"
        value
        required
      ></LogTextarea>
      <Button children="save" saveButton="true" onClick={onSubmit} />
    </Form>
  );
}

const Form = styled.form`
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
`;
