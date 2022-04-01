import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Navigation from '../components/Navigation/Navigation';

export default function LogbookPage({ logEntries }) {
  return (
    <Wrapper>
      <LogEntryList logEntries={logEntries} />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: auto 48px;
  height: 100vh;
`;
