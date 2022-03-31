import styled from 'styled-components';

export default function LogEntry({ logEntryData }) {
  return (
    <Card>
      <span>{logEntryData.boatName}</span>
      <span>{logEntryData.crewNames}</span>
      <span>{logEntryData.windSpeed}</span>
      <span>{logEntryData.windDirection}</span>
      <span>{logEntryData.waveHeight}</span>
      <span>{logEntryData.notes}</span>
    </Card>
  );
}

const Card = styled.section`
  border: 1px black solid;
  height: 50px;
`;
