import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';
import { Header } from '../styled-components/Header';

export default function LogEntryList({ sortedEntries, onDelete, onEdit }) {
  return (
    <div>
      <Header id="header">your log entries</Header>
      <EntryList role="list" aria-labelledby="header">
        {sortedEntries.map(entry => {
          return (
            <li key={entry._id}>
              <LogEntry
                tripDate={entry.tripDate}
                boatName={entry.boatName}
                crewNames={entry.crewNames}
                windSpeed={entry.windSpeed}
                windUnit={entry.windUnit}
                windDirection={entry.windDirection}
                waveHeight={entry.waveHeight}
                waveUnit={entry.waveUnit}
                notes={entry.notes}
                image={entry.image}
                onEdit={() => onEdit(entry)}
                onDelete={() => onDelete(entry._id)}
              />
            </li>
          );
        })}
      </EntryList>
    </div>
  );
}

const EntryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 2px 15px;
  padding: 0;
`;
