import styled from 'styled-components';

export default function LogInput({
  type,
  labelText,
  inputHint,
  name,
  onChange,
}) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <InputHint id="instruction">{inputHint}</InputHint>
      <Input
        type={type}
        aria-describedby="instruction"
        id={name}
        name={name}
        onChange={onChange}
      ></Input>
    </>
  );
}

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin: 5px;
`;

const InputHint = styled.p`
  font-size: 0.9rem;
  margin: 5px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
`;
