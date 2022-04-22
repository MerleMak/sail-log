import styled from 'styled-components';
import { GrTrash } from 'react-icons/gr';
import { GrEdit } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import Button from '../Button/Button';

export default function LogEntry({
  tripDate,
  boatName,
  crewNames,
  windSpeed,
  windUnit,
  windDirection,
  waveHeight,
  waveUnit,
  notes,
  image,
  onEdit,
  onDelete,
}) {
  return (
    <Card>
      <Input>
        my sail trip on <Highlight>{boatName}</Highlight> on the
        <Highlight>{tripDate}</Highlight>
      </Input>

      {crewNames ? (
        <Input>
          with <Highlight>{crewNames}</Highlight>
        </Input>
      ) : (
        ''
      )}
      {windSpeed ? (
        <Input>
          the speed of wind was
          <Highlight>
            {windSpeed} {windUnit}
          </Highlight>
        </Input>
      ) : (
        ''
      )}
      {windDirection ? (
        <Input>
          the wind came from <Highlight>{windDirection}</Highlight>
        </Input>
      ) : (
        ''
      )}
      {waveHeight ? (
        <Input>
          the wave height was{' '}
          <Highlight>
            {waveHeight} {waveUnit}
          </Highlight>
        </Input>
      ) : (
        ''
      )}
      {notes ? (
        <Textarea>
          <Highlight>"{notes}"</Highlight>
        </Textarea>
      ) : (
        ''
      )}
      {image ? <UploadedImage src={image} alt=""></UploadedImage> : ''}

      <Button
        type="button"
        variant="invisible"
        onClick={onDelete}
        aria-label="Delete this log entry"
      >
        <IconContext.Provider value={{ stroke: 'white' }}>
          <GrTrash />
        </IconContext.Provider>
      </Button>
      <EditButton
        type="button"
        variant="invisible"
        onClick={onEdit}
        aria-label="Edit this log entry"
      >
        <IconContext.Provider value={{ stroke: 'white' }}>
          <GrEdit />
        </IconContext.Provider>
      </EditButton>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
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

const EditButton = styled(Button)`
  position: absolute;
  top: 50px;
`;
