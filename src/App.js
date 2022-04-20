import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import FormPage from './routes/FormPage';
import LogbookPage from './routes/LogbookPage';
import EditPage from './routes/Editpage';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'usehooks-ts';

export default function App() {
  const [logEntries, setLogEntries] = useLocalStorage('logEntries', []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<FormPage onEntry={handleLogEntry} />} />
      <Route
        path="/logbook"
        element={
          <LogbookPage logEntries={logEntries} onDelete={handleDelete} />
        }
      />
      <Route path="/edit" element={<EditPage onSubmit={handleLogEntry} />} />
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

  function handleLogEntry(formData, image) {
    const newEntry = {
      boatName: formData.boatName,
      crewNames: formData.crewNames,
      windSpeed: formData.windSpeed,
      windDirection: formData.windDirection,
      waveHeight: formData.waveHeight,
      notes: formData.notes,
      image: image,
      _id: nanoid(),
    };
    setLogEntries([...logEntries, newEntry]);
  }
  function handleDelete(id) {
    setLogEntries(logEntries.filter(entry => entry._id !== id));
  }
}
