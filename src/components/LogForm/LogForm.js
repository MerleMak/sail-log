import styled from "styled-components";
import LogInput from "../LogInput/LogInput";
import Button from "../Button/Button";

export default function LogForm({ onClick }) {
  return (
    <>
      <Form autoComplete="off" aria-label="Create-a-new-log-entry">
        <LogInput
          labelText="Notes:"
          inputHintText="..type information like wind direction, wave size.."
        ></LogInput>
        <Button children="save" saveButton="true" onClick={onClick} />
      </Form>
    </>
  );
}

const Form = styled.form`
  padding: 20px;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
`;
