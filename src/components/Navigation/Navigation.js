import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { GrHomeRounded, GrCatalog, GrAnchor, GrAdd } from 'react-icons/gr';
import { IoCreateOutline } from 'react-icons/io5';
import { FaGripLinesVertical } from 'react-icons/fa';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <GrAnchor />
        </IconContext.Provider>
      </Link>
      <IconContext.Provider value={{ size: '0.8rem' }}>
        <VerticalLine />
      </IconContext.Provider>
      <Link to="/logbook">
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <GrCatalog />
        </IconContext.Provider>
      </Link>
      <IconContext.Provider value={{ size: '0.8rem' }}>
        <VerticalLine />
      </IconContext.Provider>
      <Link to="/create">
        <IconContext.Provider value={{ size: '1.5rem', color: '#d5e5f2' }}>
          <GrAdd />
        </IconContext.Provider>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: #d5e5f2;
  width: 15px;
`;

const VerticalLine = styled(FaGripLinesVertical)`
  color: black;
`;
