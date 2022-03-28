import styled from "styled-components";

export default function LogInput({ labelText, inputHintText }) {
  return (
    <Inputwrapper>
      <label htmlFor="logInput">{labelText}</label>
      <InputHint id="instruction">{inputHintText}</InputHint>
      <textarea
        name="logInput"
        id="logInput"
        aria-describedby="instruction"
        type="text"
        rows={6}
      ></textarea>
    </Inputwrapper>
  );
}

const Inputwrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
`;

const InputHint = styled.p`
  font-size: 1rem;
  margin: 0;
`;
