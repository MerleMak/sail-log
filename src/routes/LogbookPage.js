import { useState } from 'react';
import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Navigation from '../components/Navigation/Navigation';
import Button from '../components/Button/Button';
import { GiShoonerSailboat } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';

export default function LogbookPage({ logEntries }) {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [entries, setEntries] = useState(logEntries);
  console.log(entries);
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
        <div>
          <LogEntryList entries={entries} onClick={handleOpenModal} />
          <Modal
            isOpen={showModal}
            closeTImeoutMS={0}
            contentLabel="Confirm if you want to delete your log entry"
            id="modal"
            ariaHideApp={true}
            shouldFocusAfterRender={true}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={true}
            preventScroll={true}
            appElement={document.body}
          >
            <p>Are you sure you want to delete this log entry?</p>
            <Button variant="confirm" onClick={handleConfirmDelete}>
              Yes, I am sure!
            </Button>
            <Button variant="deny" onClick={() => setShowModal(false)}>
              Keep log entry
            </Button>
          </Modal>
        </div>
      )}
      <Navigation />
    </Wrapper>
  );
  function handleOpenModal(_id) {
    setShowModal(true);
    setCurrentId(_id);
  }

  function handleConfirmDelete() {
    setEntries(entries.filter(entry => entry._id !== currentId));
    setShowModal(false);
  }
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
