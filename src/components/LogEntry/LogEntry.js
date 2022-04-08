import styled from 'styled-components';
import { GrTrash } from 'react-icons/gr';
import Button from '../Button/Button';

export default function LogEntry({ entry, onClick }) {
  return (
    <Card>
      <Input>
        sail trip on <Highlight>{entry.boatName}</Highlight>
      </Input>
      <Input>
        with <Highlight>{entry.crewNames}</Highlight>
      </Input>
      <Input>
        the speed of wind was
        <Highlight>{entry.windSpeed}</Highlight>
      </Input>
      <Input>
        the wind came from <Highlight>{entry.windDirection}</Highlight>
      </Input>
      <Input>
        the wave height was <Highlight>{entry.waveHeight}</Highlight>
      </Input>
      <Textarea>
        <Highlight>"{entry.notes}"</Highlight>
      </Textarea>
      <img src={entry.image} alt="" />
      <Button
        type="button"
        variant="invisible"
        onClick={onClick}
        aria-label="Delete this log entry"
      >
        <GrTrash />
      </Button>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px #012e40 solid;
  border-radius: 15px;
  height: fit-content;
  color: #012e40;
  background-color: #d5e5f2;
  padding: 10px;
  gap: 5px;
  position: relative;
`;
const Highlight = styled.span`
  font-family: Limelight;
  font-size: 1.5rem;
`;
const Input = styled.span`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.span`
  margin: 10px;
`;
