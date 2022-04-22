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
  console.log(logEntries);
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

  function handleEntry(data, image) {
    const newEntry = {
      tripDate: data.tripDate,
      boatName: data.boatName,
      crewNames: data.crewNames,
      windSpeed: data.windSpeed,
      windUnit: data.windUnit,
      windDirection: data.windDirection,
      waveHeight: data.waveHeight,
      waveUnit: data.waveUnit,
      notes: data.notes,
      image: image,
      _id: nanoid(),
    };
    setLogEntries([...logEntries, newEntry]);
  }

  function handleEditEntry(data, image) {
    const newLogEntries = logEntries.map(entry =>
      entry._id === entryToEdit._id
        ? {
            ...entry,
            tripDate: data.tripDate,
            boatName: data.boatName,
            crewNames: data.crewNames,
            windSpeed: data.windSpeed,
            windUnit: data.windUnit,
            windDirection: data.windDirection,
            waveHeight: data.waveHeight,
            waveUnit: data.waveUnit,
            notes: data.notes,
            image: image,
          }
        : entry
    );
    setLogEntries(newLogEntries);
  }

  function handleEditRedirect(entry) {
    setEntryToEdit({ ...entry });
    navigate('/edit');
  }

  function handleDelete(id) {
    setLogEntries(logEntries.filter(entry => entry._id !== id));
  }
}
