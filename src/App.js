import styled from "styled-components";
import LogForm from "./components/LogForm/LogForm";

export default function App() {
  return (
    <>
      <Header>sail log</Header>
      <LogForm onClick={handleClick} />
    </>
  );

  function handleClick() {}
}

const Header = styled.h1`
  text-align: center;
  font-family: Limelight;
  font-size: 40px;
  color: #013440;
`;
