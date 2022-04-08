import { useState } from 'react';
import styled from 'styled-components';
import LogEntryList from '../components/LogEntryList/LogEntryList';
import Navigation from '../components/Navigation/Navigation';
import Button from '../components/Button/Button';
import { GiShoonerSailboat } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import Modal from 'react-modal';

export default function LogbookPage({ logEntries, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
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
        <LogEntryListWrapper>
          <LogEntryList logEntries={logEntries} onClick={handleOpenModal} />
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
            style={{
              overlay: {
                backgroundColor: '#37748C',
                opacity: '97%',
              },
              content: {
                color: ' #37748C',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '20px',
                fontSize: '1.5rem',
                right: '15px',
                left: '15px',
                top: 'auto',
                bottom: 'auto',
                borderRadius: '15px',
                marginTop: '100px',
              },
            }}
          >
            <p> Are you sure you want to delete this log entry?</p>

            <Button variant="confirm" onClick={handleConfirmDelete}>
              Delete log entry
            </Button>
            <Button variant="deny" onClick={() => setShowModal(false)}>
              Keep log entry
            </Button>
          </Modal>
        </LogEntryListWrapper>
      )}
      <Navigation />
    </Wrapper>
  );
  function handleOpenModal(_id) {
    setShowModal(true);
    setCurrentId(_id);
  }
  function handleConfirmDelete() {
    onDelete(currentId);
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
  margin: 10px;
  padding: 50px 0px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
`;

const Icon = styled(GiShoonerSailboat)`
  margin: 20px;
  align-self: center;
`;

const LogEntryListWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 2px;
`;
