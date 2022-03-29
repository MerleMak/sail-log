import styled from "styled-components";

export default function LogInput({ labelText, inputHint, name, id }) {
  return (
    <InputWrapper>
      <label htmlFor="logInput">{labelText}</label>
      <InputHint id="instruction">{inputHint}</InputHint>
      <input
        type="text"
        aria-describedby="instruction"
        name={name}
        id={id}
      ></input>
    </InputWrapper>
  );
}

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #d5e5f2;
  padding: 15px;
  margin: 10px;
  border: #012e40 2px solid;
  border-radius: 20px;
  label {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  textarea {
    border-radius: 15px;
    margin: -7px;
    margin-top: 5px;
    padding: 10px;
    background-color: #d5e5f2;
    border: #012e40 2px solid;
  }
`;

const InputHint = styled.p`
  font-size: 1rem;
  margin: 0;
`;
