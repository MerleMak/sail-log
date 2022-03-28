import styled from "styled-components";

export default function LogForm() {
  return (
    <>
      <Form autoComplete="off" aria-label="Create-a-new-log-entry"></Form>
    </>
  );
}

const Form = styled.form`
  border: 1px solid black;
  overflow-y: auto;
  overflow-x: hidden;
`;
