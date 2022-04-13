import styled from 'styled-components';
import LogForm from '../components/LogForm/LogForm';
import Navigation from '../components/Navigation/Navigation';

export default function FormPage({ onSubmit, onEdited }) {
  return (
    <Wrapper>
      <LogForm
        onSubmit={onSubmit}
        onEdited={onEdited}
        children="Create your log entry"
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
