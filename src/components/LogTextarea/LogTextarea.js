import styled from "styled-components";

export default function LogTextarea({
  labelText,
  textareaHint,
  name,
  required,
}) {
  return (
    <TextareaWrapper>
      <label htmlFor={name}>{labelText}</label>
      <TextareaHint id="instruction">{textareaHint}</TextareaHint>
      <textarea
        type="text"
        aria-describedby="instruction"
        rows={6}
        id={name}
        name={name}
        required={required}
      ></textarea>
    </TextareaWrapper>
  );
}

const TextareaWrapper = styled.section`
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

const TextareaHint = styled.p`
  font-size: 1rem;
  margin: 0;
`;
