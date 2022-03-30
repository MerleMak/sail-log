import styled from 'styled-components';
import LogForm from './components/LogForm/LogForm';
import LogEntryList from './components/LogEntryList/LogEntryList';
import { useState } from 'react';
import Button from './components/Button/Button';

export default function App() {
  const [logEntries, setLogEntries] = useState([]);
  console.log(logEntries);

  return logEntries.length === 0 ? (
    <>
      <Header>sail log</Header>
      <LogForm onSubmit={handleLogEntry} />
    </>
  ) : (
    <>
      <LogEntryList logEntries={logEntries} />
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
