import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './routes/HomePage';
import FormPage from './routes/FormPage';
import LogbookPage from './routes/LogbookPage';

export default function App() {
  const [logEntries, setLogEntries] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create"
          element={<FormPage onSubmit={handleLogEntry} />}
        />
        <Route
          path="/logbook"
          element={<LogbookPage logEntries={logEntries} />}
        />
        <Route
          path="/*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Navigation>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/create">create a new log entry</NavLink>
        <NavLink to="/logbook">logbook</NavLink>
      </Navigation>
    </>
  );
  function handleLogEntry(formData) {
    setLogEntries([...logEntries, formData]);
  }
}
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
