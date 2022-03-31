import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Button from '../components/Button/Button';

export default function LogbookPage({ logEntries }) {
  return (
    <>
      <LogEntryList logEntries={logEntries} />
      <Button onClick={handleClick} variant="navigate">
        create a new log entry
      </Button>
    </>
  );

  function handleClick() {}
}
