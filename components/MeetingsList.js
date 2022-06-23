import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import Card from '../components/Card';

function MeetingsList({ meetingsList }) {
  return (
    <>
      {meetingsList.length === 0 ? (
        <StyledEmptyMeetingList>
          <Typography variant="h6">Keine Meetings vorhanden.</Typography>
        </StyledEmptyMeetingList>
      ) : (
        <StyledMeetingsList>
          {meetingsList.map(meeting => {
            return (
              <Link href={`/meetings/${meeting.id}`} key={meeting.id}>
                <StyledLink>
                  <a>
                    <Card meeting={meeting} />
                  </a>
                </StyledLink>
              </Link>
            );
          })}
        </StyledMeetingsList>
      )}
    </>
  );
}

const StyledEmptyMeetingList = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const StyledMeetingsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const StyledLink = styled.li`
  min-height: 100px;
  list-style: none;
  padding: 0 4px;
  width: 50%;

  &:nth-child(n + 3) {
    margin-top: 8px;
  }

  :hover {
    cursor: pointer;
  }
`;

export default MeetingsList;
