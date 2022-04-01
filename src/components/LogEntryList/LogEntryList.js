import LogEntry from '../LogEntry/LogEntry';
import styled from 'styled-components';
import { Header } from '../styled-components/Header';
// check if there are logEntries?
export default function LogEntryList({ logEntries }) {
  return <li></li> ? (
    <Wrapper>
      <Header>your log entries</Header>
      <EntryList role="list" aria-label="Your-log-entries">
        {logEntries.map((logEntryData, index) => {
          return (
            <li key={index}>
              <LogEntry logEntryData={logEntryData} />
            </li>
          );
        })}
      </EntryList>
    </Wrapper>
  ) : (
    <p>No entries yet.. time to go sailing!</p>
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
