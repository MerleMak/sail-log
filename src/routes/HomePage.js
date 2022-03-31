import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import { IconContext } from 'react-icons';
import { GiShoonerSailboat } from 'react-icons/gi';

export default function HomePage() {
  return (
    <HomePageWrapper>
      <Header>sail log</Header>
      <IconContext.Provider value={{ size: '10rem' }}>
        <Icon />
      </IconContext.Provider>
      <NavWrapper>
        <Button variant="navigate">
          <Link to="/create">create new log entry</Link>
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
const Header = styled.h1`
  text-align: center;
  font-family: Limelight;
  font-size: 40px;
  color: #d5e5f2;
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
