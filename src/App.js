import styled from 'styled-components';
import LogForm from './components/LogForm/LogForm';
import LogEntryList from './components/LogEntryList/LogEntryList';
import { useState } from 'react';

export default function App() {
  const [logEntries, setLogEntries] = useState([]);
  console.log(logEntries);

  return (
    <>
      <LogEntryList logEntries={logEntries} />
      <Header>sail log</Header>
      <LogForm onSubmit={handleLogEntry} />
    </>
  );

  function handleLogEntry(formData) {
    setLogEntries([...logEntries, formData]);
  }
}

const Header = styled.h1`
  text-align: center;
  font-family: Limelight;
  font-size: 40px;
  color: #d5e5f2;
`;
