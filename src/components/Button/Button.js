import styled from "styled-components";

export default function Button({ children, onClick, saveButton }) {
  return (
    <BasicButton saveButton={saveButton} onClick={onClick}>
      {children}
    </BasicButton>
  );
}

const BasicButton = styled.button`
  background-color: ${(props) => (props.saveButton ? "#F2B705" : "#ddd")};
  color: ${(props) => (props.saveButton ? "#013440" : "inherit")};
  padding: 15px;
  position: fixed;
  bottom: 50px;
  right: 43vw;
  border-radius: 20px;
  border: none;
  font-size: 1.5rem;
`;
