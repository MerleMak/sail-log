import styled from 'styled-components';

export default function LogEntry({ logEntryData }) {
  return (
    <Card>
      <Input>
        sail trip on <Highlight>{logEntryData.boatName}</Highlight>
      </Input>
      <Input>
        with <Highlight>{logEntryData.crewNames}</Highlight>
      </Input>
      <Input>
        the speed of wind was <Highlight>{logEntryData.windSpeed}</Highlight>
      </Input>
      <Input>
        the wind came from <Highlight>{logEntryData.windDirection}</Highlight>
      </Input>
      <Input>
        the wave height was <Highlight>{logEntryData.waveHeight}</Highlight>
      </Input>
      <Textarea>
        <Highlight>"{logEntryData.notes}"</Highlight>
      </Textarea>
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
