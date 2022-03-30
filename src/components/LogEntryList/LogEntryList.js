import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';

export default function LogEntryList({ logEntries }) {
  return (
    <EntryList role="list" aria-label="Your-log-entries">
      {logEntries.map((logEntryData, index) => {
        return (
          <li key={index}>
            <LogEntry logEntryData={logEntryData} />
          </li>
        );
      })}
    </EntryList>
  );
}

const EntryList = styled.ul`
  list-style: none;
`;
