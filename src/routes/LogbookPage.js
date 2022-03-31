import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';

export default function LogbookPage({ logEntries }) {
  return (
    <>
      <LogEntryList logEntries={logEntries} />
      <Button onClick={handleClick} variant="navigate">
        create a new log entry
      </Button>
      <Navigation />
    </>
  );

  function handleClick() {}
}
