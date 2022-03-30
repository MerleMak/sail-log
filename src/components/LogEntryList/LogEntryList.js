import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';

export default function LogEntryList({ logEntries }) {
  return <li></li> ? (
    <EntryList role="list" aria-label="Your-log-entries">
      {logEntries.map((logEntryData, index) => {
        return (
          <li key={index}>
            <LogEntry logEntryData={logEntryData} />
          </li>
        );
      })}
    </EntryList>
  ) : (
    <p>No entries yet.. time to go sailing!</p>
  );
}

const EntryList = styled.ul`
  list-style: none;
`;
