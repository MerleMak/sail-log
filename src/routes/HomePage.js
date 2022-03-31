import Button from '../components/Button/Button';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Button>
        <NavLink to="/create">create a new log entry</NavLink>
      </Button>

      <Button>
        <NavLink to="/logbook">go to logbook</NavLink>
      </Button>
    </>
  );
}
