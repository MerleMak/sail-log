import styled from 'styled-components';
import LogForm from '../components/LogForm/LogForm';
import Navigation from '../components/Navigation/Navigation';
import { Header } from '../styled-components/Header';

export default function FormPage({ onSubmit }) {
  return (
    <Wrapper>
      <Header>sail log</Header>
      <LogForm onSubmit={onSubmit} />
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
