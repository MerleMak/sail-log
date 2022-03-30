import styled from 'styled-components';
// import LogInput from "../LogInput/LogInput";
import LogTextarea from '../LogTextarea/LogTextarea';
import Button from '../Button/Button';
import { useState } from 'react';

export default function LogForm({ onSubmit }) {
  const [formData, setFormData] = useState('');

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onSubmit(formData);
    form.reset();
  }

  return (
    <Form
      autoComplete="off"
      aria-label="Create-a-new-log-entry"
      onSubmit={handleSubmit}
    >
      <LogTextarea
        type="text"
        labelText="Notes:"
        textareaHint="..type information like wind direction, wave size.."
        name="notes"
        required
        onChange={handleOnChange}
      ></LogTextarea>
      <Button type="submit" saveButton>
        save
      </Button>
    </Form>
  );
}

const Form = styled.form`
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
`;
