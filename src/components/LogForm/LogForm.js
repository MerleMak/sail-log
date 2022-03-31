import styled from 'styled-components';
import LogInput from '../LogInput/LogInput';
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
    <FormGrid>
      <Form
        autoComplete="off"
        aria-label="Create-a-new-log-entry"
        onSubmit={handleSubmit}
      >
        <LogInput
          type="text"
          labelText="name of the boat"
          name="boatName"
          required
          onChange={handleOnChange}
        ></LogInput>
        <LogInput
          type="text"
          labelText="names of the crew"
          inputHint="type in the names separated by a comma"
          name="crewNames"
          onChange={handleOnChange}
        ></LogInput>
        <LogInput
          type="text"
          labelText="speed of wind"
          name="windSpeed"
          onChange={handleOnChange}
        ></LogInput>
        <LogInput
          type="text"
          labelText="direction of wind"
          name="windDirection"
          onChange={handleOnChange}
        ></LogInput>
        <LogInput
          type="text"
          labelText="height of waves"
          name="waveHeight"
          onChange={handleOnChange}
        ></LogInput>
        <LogTextarea
          type="text"
          labelText="notes:"
          textareaHint="type information like wind direction, wave size.."
          name="notes"
          onChange={handleOnChange}
        ></LogTextarea>
        <Button type="submit" variant="save">
          save
        </Button>
      </Form>
    </FormGrid>
  );
}

const FormGrid = styled.div`
  display: grid; ;
`;

const Form = styled.form`
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
`;
