import styled from 'styled-components';
import { GrTrash, GrEdit } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import Button from '../Button/Button';
import LogForm from '../LogForm/LogForm';

export default function LogEntry({ entry, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <Card>
      {isEditing ? (
        <LogForm
          children={'edit your log entry'}
          entry={entry}
          isEditing={isEditing}
        />
      ) : (
        <>
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
          <DeleteButton
            type="button"
            variant="invisible"
            onClick={onClick}
            aria-label="Delete this log entry"
          >
            <IconContext.Provider value={{ stroke: 'black' }}>
              <GrTrash />
            </IconContext.Provider>
          </DeleteButton>
          <EditButton
            type="button"
            variant="invisible"
            onClick={handleEdit}
            aria-label="Edit this log entry"
          >
            <IconContext.Provider value={{ stroke: 'black' }}>
              <GrEdit />
            </IconContext.Provider>
          </EditButton>
        </>
      )}
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

const DeleteButton = styled(Button)`
  position: absolute;
  right: 7px;
`;

const EditButton = styled(Button)`
  position: absolute;
  right: 7px;
  top: 50px;
`;

const UploadedImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 3px;
  margin-left: -1px;
`;
