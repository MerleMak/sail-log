import styled from 'styled-components';
import { GrTrash } from 'react-icons/gr';
import Button from '../Button/Button';

export default function LogEntry({ logEntryData, onDelete, _id }) {
  console.log(logEntryData);
  return (
    <Card>
      <Input>
        sail trip on <Highlight>{logEntryData.formData.boatName}</Highlight>
      </Input>
      <Input>
        with <Highlight>{logEntryData.formData.crewNames}</Highlight>
      </Input>
      <Input>
        the speed of wind was{' '}
        <Highlight>{logEntryData.formData.windSpeed}</Highlight>
      </Input>
      <Input>
        the wind came from{' '}
        <Highlight>{logEntryData.formData.windDirection}</Highlight>
      </Input>
      <Input>
        the wave height was{' '}
        <Highlight>{logEntryData.formData.waveHeight}</Highlight>
      </Input>
      <Textarea>
        <Highlight>"{logEntryData.formData.notes}"</Highlight>
      </Textarea>
      <Button type="button" variant="invisible" onClick={() => onDelete(_id)}>
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
