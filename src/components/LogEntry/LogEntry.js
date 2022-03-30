import styled from 'styled-components';

export default function LogEntry({ logEntryData }) {
  return (
    <Card>
      <div>{logEntryData.notes}</div>
    </Card>
  );
}

const Card = styled.section`
  border: 1px black solid;
  height: 50px;
`;
