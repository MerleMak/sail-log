import styled from "styled-components";
import LogForm from "./components/LogForm/LogForm";
import { useState } from "react";

export default function App() {
  const [logEntries, setLogEntries] = useState([]);
  console.log(logEntries);

  return (
    <>
      <Header>sail log</Header>
      <LogForm onSubmit={handleLogEntry} />
    </>
  );

  function handleLogEntry(text) {
    const newLogEntry = { text };
    setLogEntries([...logEntries, newLogEntry]);
  }
}

const Header = styled.h1`
  text-align: center;
  font-family: Limelight;
  font-size: 40px;
  color: #d5e5f2;
`;
