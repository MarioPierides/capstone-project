import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

import Card from '../components/Card';

function MeetingsList({ meetingsList }) {
  return (
    <>
      <StyledMeetingsList>
        {meetingsList.map(meeting => {
          return (
            <Link href={`/meetings/${meeting.id}`} key={meeting.id}>
              <StyledLink>
                <StyledAnchor>
                  <Card meeting={meeting} />
                </StyledAnchor>
              </StyledLink>
            </Link>
          );
        })}
      </StyledMeetingsList>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bearbeite dein Meeting</DialogTitle>
        <DialogContent>
          <div>Test</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Abbrechen</Button>
          <Button onClick={handleClose}>Speichern</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}

export default MeetingsList;

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

const StyledAnchor = styled.a``;

const StyledMeetingsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
