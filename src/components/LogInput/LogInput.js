import styled from 'styled-components';

export default function LogInput({
  type,
  labelText,
  inputHint,
  name,
  required,
  onChange,
}) {
  return (
    <InputWrapper>
      <label htmlFor={name}>{labelText}</label>
      <InputHint id="instruction">{inputHint}</InputHint>
      <input
        type={type}
        aria-describedby="instruction"
        id={name}
        name={name}
        required={required}
        onChange={onChange}
      ></input>
    </InputWrapper>
  );
}

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #d5e5f2;
  padding: 15px;
  margin: 10px;
  border: #012e40 2px solid;
  border-radius: 20px;
  color: #012e40;
  label {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  input {
    border-radius: 15px;
    margin: -7px;
    margin-top: 5px;
    padding: 10px;
    background-color: #d5e5f2;
    border: #012e40 2px solid;
  }
`;

const InputHint = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;
