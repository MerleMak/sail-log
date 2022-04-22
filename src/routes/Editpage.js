import styled from 'styled-components';
import LogForm from '../components/LogForm/LogForm';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import { GrRevert } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import Button from '../components/Button/Button';

export default function EditPage({ onEditEntry, entryToEdit }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <AbortButton
        type="button"
        variant="deny"
        onClick={() => navigate(-1)}
        aria-label="Abort editing"
      >
        <IconContext.Provider value={{ stroke: 'white' }}>
          <GrRevert />
        </IconContext.Provider>
      </AbortButton>
      <LogForm
        header="edit your log entry"
        preloadedValues={entryToEdit}
        onSubmitEntry={onEditEntry}
      />
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

const AbortButton = styled(Button)`
  position: absolute;
  padding: 10px 10px 7px 10px;
  top: 75px;
  right: 20px;
  border-radius: 10px;
  z-index: 1;
`;
