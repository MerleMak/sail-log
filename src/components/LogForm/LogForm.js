import styled from "styled-components";
import LogInput from "../LogInput/LogInput";

export default function LogForm() {
  return (
    <>
      <Form autoComplete="off" aria-label="Create-a-new-log-entry">
        <LogInput labelText="Notes:"></LogInput>
      </Form>
    </>
  );
}

const Form = styled.form`
  border: 1px solid black;
  overflow-y: auto;
  overflow-x: hidden;
`;
