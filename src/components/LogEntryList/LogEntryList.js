import LogEntry from '../';
import styled from 'styled-components';

export default function LogEntryList({ logEntries }) {
  return (
    <EntryList role="list" aria-label="Your Log Entries">
      {logEntries.map(logEntry => {
        return (
          <li>
            <LogEntry logEntry={logEntry} key={logEntry.id} />
          </li>
        );
      })}
    </EntryList>
  );
}

const EntryList = styled.ul`
  list-style: none;
`;
