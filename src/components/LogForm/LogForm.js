import styled from 'styled-components';
import LogInput from '../LogInput/LogInput';
import LogTextarea from '../LogTextarea/LogTextarea';
import Button from '../Button/Button';
import { Header } from '../styled-components/Header';
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
    <Form autoComplete="off" aria-labelledby="header" onSubmit={handleSubmit}>
      <CreateHeader id="header">create new log entry</CreateHeader>
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
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="speed of wind"
        name="windSpeed"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="direction of wind"
        name="windDirection"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="height of waves"
        name="waveHeight"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogTextarea
        type="text"
        labelText="notes:"
        textareaHint="type information like wind direction, wave size.."
        name="notes"
        onChange={handleOnChange}
      ></LogTextarea>
      <SaveButton type="submit" variant="save">
        save
      </SaveButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CreateHeader = styled(Header)`
  font-size: 32px;
`;

//button doesn't adapt styles, any idea why?
const SaveButton = styled(Button)`
  width: 100px;
  justify-self: center;
`;
