import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Navigation from '../components/Navigation/Navigation';
import { GiShoonerSailboat } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export default function LogbookPage({ logEntries, onDelete }) {
  return (
    <Wrapper>
      {logEntries.length === 0 ? (
        <EmptyState>
          <p>No entries yet.. time to go sailing!</p>
          <IconContext.Provider value={{ size: '10rem' }}>
            <Icon />
          </IconContext.Provider>
        </EmptyState>
      ) : (
        <LogEntryList logEntries={logEntries} onDelete={onDelete} />
      )}
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

const EmptyState = styled.div`
  text-align: center;
  padding: 50px 0px;
  font-size: 1.3rem;
`;

const Icon = styled(GiShoonerSailboat)`
  margin: 20px;
`;
