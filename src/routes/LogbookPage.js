import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Navigation from '../components/Navigation/Navigation';
import { Header } from '../styled-components/Header';

export default function LogbookPage({ logEntries }) {
  return (
    <Wrapper>
      <Header>sail log</Header>
      <LogEntryList logEntries={logEntries} />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: 90px auto 48px;
  height: 100vh;
`;
