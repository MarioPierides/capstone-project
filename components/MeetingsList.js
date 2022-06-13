import styled from 'styled-components';

import Card from '../components/Card';

function MeetingsList({ meetingsList }) {
  return (
    <StyledMeetingsList>
      {meetingsList.map(meeting => {
        return <Card meeting={meeting} key={meeting.id} />;
      })}
    </StyledMeetingsList>
  );
}

export default MeetingsList;

const StyledMeetingsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  padding: 0;
`;
