import styled from "styled-components";
import LogForm from "./components/LogForm/LogForm";

export default function App() {
  return (
    <>
      <Header>sail log</Header>
      <LogForm />
    </>
  );
}

const Header = styled.h1`
  text-align: center;
`;
