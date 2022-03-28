import styled from "styled-components";

export default function LogInput({ labelText, placeholderText }) {
  return (
    <Inputwrapper>
      <label htmlFor="logInput">{labelText}</label>
      <input
        name="logInput"
        id="logInput"
        placeholder={placeholderText}
        type="text"
      ></input>
    </Inputwrapper>
  );
}

const Inputwrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
