import styled from 'styled-components';
import LogForm from '../components/LogForm/LogForm';

export default function FormPage({ onSubmit }) {
  return (
    <>
      <Header>sail log</Header>
      <LogForm onSubmit={onSubmit} />
    </>
  );
}

const Header = styled.h1`
  text-align: center;
  font-family: Limelight;
  font-size: 40px;
  color: #d5e5f2;
`;
