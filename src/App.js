import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './routes/HomePage';
import FormPage from './routes/FormPage';
import LogbookPage from './routes/LogbookPage';
import EditPage from './routes/Editpage';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

export default function App() {
  const [logEntries, setLogEntries] = useLocalStorage('logEntries', []);
  const [entryToEdit, setEntryToEdit] = useState(null);

  const sortedEntries = logEntries ? [...logEntries].reverse() : null;
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/create"
        element={<FormPage onSubmitEntry={handleEntry} />}
      />
      <Route
        path="/logbook"
        element={
          <LogbookPage
            onDeleteConfirm={handleDelete}
            onEditEntry={handleEditRedirect}
            sortedEntries={sortedEntries}
          />
        }
      />
      <Route
        path="/edit"
        element={
          <EditPage onEditEntry={handleEditEntry} entryToEdit={entryToEdit} />
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
  );

  function handleEntry({
    tripDate,
    boatName,
    crewNames,
    windSpeed,
    windUnit,
    windDirection,
    waveHeight,
    waveUnit,
    notes,
    image,
  }) {
    const newEntry = {
      tripDate: tripDate,
      boatName: boatName,
      crewNames: crewNames,
      windSpeed: windSpeed,
      windUnit: windUnit,
      windDirection: windDirection,
      waveHeight: waveHeight,
      waveUnit: waveUnit,
      notes: notes,
      image: image,
      _id: nanoid(),
    };
    setLogEntries([...logEntries, newEntry]);
  }

  function handleEditEntry({
    tripDate,
    boatName,
    crewNames,
    windSpeed,
    windUnit,
    windDirection,
    waveHeight,
    waveUnit,
    notes,
    image,
  }) {
    const editedEntry = {
      _id: entryToEdit._id,
      entry: {
        tripDate: tripDate,
        boatName: boatName,
        crewNames: crewNames,
        windSpeed: windSpeed,
        windUnit: windUnit,
        windDirection: windDirection,
        waveHeight: waveHeight,
        waveUnit: waveUnit,
        notes: notes,
        image: image,
      },
    };
    setLogEntries([...logEntries, editedEntry]);
  }

  function handleEditRedirect(entry) {
    setEntryToEdit({ ...entry });
    navigate('/edit');
  }

  function handleDelete(id) {
    setLogEntries(logEntries.filter(entry => entry._id !== id));
  }
}
