import styled from 'styled-components';
import LogForm from '../components/LogForm/LogForm';
import Navigation from '../components/Navigation/Navigation';

export default function FormPage({ onSubmit }) {
  return (
    <>
      <LogForm onSubmit={onSubmit} />
      <Navigation />
    </>
  );
}
