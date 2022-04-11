import styled from 'styled-components';
import { GrTrash } from 'react-icons/gr';
import { IconContext } from 'react-icons';
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
      <UploadedImage src={entry.image} alt=""></UploadedImage>
      <Button
        type="button"
        variant="invisible"
        onClick={onClick}
        aria-label="Delete this log entry"
      >
        <IconContext.Provider value={{ stroke: 'white' }}>
          <GrTrash />
        </IconContext.Provider>
      </Button>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  //border: 2px #012e40 solid;
  box-shadow: 3px 3px 3px;
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

const UploadedImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 3px;
  margin-left: -1px;
`;
