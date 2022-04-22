import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import { Header } from '../components/styled-components/Header';
import { IconContext } from 'react-icons';
import { GiShoonerSailboat } from 'react-icons/gi';

export default function HomePage() {
  return (
    <HomePageWrapper>
      <HomeHeader>sail log</HomeHeader>
      <IconContext.Provider value={{ size: '10rem' }}>
        <Icon />
      </IconContext.Provider>
      <NavWrapper>
        <Button variant="navigate">
          <Link to="/create">create a new log entry</Link>
        </Button>
        <Button variant="navigate">
          <Link to="/logbook">go to logbook</Link>
        </Button>
      </NavWrapper>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const HomeHeader = styled(Header)`
  font-size: 3.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
  gap: 20px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #012e40;
`;

const Icon = styled(GiShoonerSailboat)`
  margin: 20px;
`;
