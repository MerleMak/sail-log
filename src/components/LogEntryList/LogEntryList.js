import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';
import { Header } from '../styled-components/Header';

export default function LogEntryList({ logEntries, onDelete }) {
  return (
    <Wrapper>
      <Header id="header">your log entries</Header>
      <EntryList role="list" aria-labelledby="header">
        {logEntries.map(logEntryData => {
          return (
            <li key={logEntryData._id}>
              <LogEntry
                logEntryData={logEntryData}
                onDelete={() => onDelete(logEntryData._id)}
              />
            </li>
          );
        })}
      </EntryList>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const EntryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px 15px;
  padding: 0;
`;
