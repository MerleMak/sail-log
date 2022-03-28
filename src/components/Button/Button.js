import styled from "styled-components";

export default function Button({ children, onClick, saveButton }) {
  return (
    <BasicButton saveButton={saveButton} onClick={onClick}>
      {children}
    </BasicButton>
  );
}

const BasicButton = styled.button`
  background-color: ${(props) => (props.saveButton ? "#666" : "#ddd")};
  color: ${(props) => (props.saveButton ? "white" : "inherit")};
  border: none;
  padding: 4px 12px;
`;
