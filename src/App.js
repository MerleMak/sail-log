import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import FormPage from './routes/FormPage';
import LogbookPage from './routes/LogbookPage';
import { nanoid } from 'nanoid';

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
          element={
            <LogbookPage logEntries={logEntries} onDelete={handleDelete} />
          }
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
    </>
  );

  function handleLogEntry(formData) {
    const newEntry = {
      formData: formData,
      _id: nanoid(),
    };
    setLogEntries([...logEntries, newEntry]);
  }

  function handleDelete(_id) {
    setLogEntries(logEntries.filter(Entry => Entry._id !== _id));
  }
}
