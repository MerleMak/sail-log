import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/create">create a new log entry</NavLink>
      <NavLink to="/logbook">logbook</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;
