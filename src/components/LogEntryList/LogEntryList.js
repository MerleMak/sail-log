import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';
import { Header } from '../styled-components/Header';

export default function LogEntryList({ logEntries, onClick, onEdit }) {
  return (
    <div>
      <Header id="header">your log entries</Header>
      <EntryList role="list" aria-labelledby="header">
        {logEntries.map(entry => {
          return (
            <li key={entry._id}>
              <LogEntry entry={entry} onClick={() => onClick(entry._id)} />
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
