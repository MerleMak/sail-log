import styled from 'styled-components';

export default function LogTextarea({
  labelText,
  textareaHint,
  name,
  onChange,
}) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <TextareaHint id="instruction">{textareaHint}</TextareaHint>
      <Textarea
        aria-describedby="instruction"
        id={name}
        name={name}
        onChange={onChange}
      ></Textarea>
    </>
  );
}

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
`;

const TextareaHint = styled.p`
  font-size: 0.9rem;
  margin: 5px;
`;
