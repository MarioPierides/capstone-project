import Image from 'next/image';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiCalendar, mdiMapMarker } from '@mdi/js';

import alster from '../public/assets/images/alster.jpg';
import elbe from '../public/assets/images/elbe.jpg';
import stadtpark from '../public/assets/images/stadtpark.jpeg';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const StyledCard = styled.li`
  min-height: 100px;
  list-style: none;
  padding: 0 4px;
  width: 50%;

  &:nth-child(n + 3) {
    margin-top: 8px;
  }
`;

const CardContent = styled.div`
  border-radius: 4px;
  border: 1px solid black;
`;

const CardImage = styled.div``;

const CardWrapper = styled.div`
  padding: 3px;
`;

const CardTitle = styled.h3``;

const CardElement = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 2px;
  }
`;

function Card({ meeting }) {
  console.log('alster', alster);

  return (
    <StyledCard key={meeting.id}>
      <CardContent>
        <CardImage>
          <Image src={alster} />
        </CardImage>
        <CardWrapper>
          <CardTitle>{meeting.title}</CardTitle>
          <CardElement>
            <Icon path={mdiCalendar} title="Calendar" size={1} />
            <p>{meeting.date}</p>
          </CardElement>
          <CardElement>
            <Icon path={mdiMapMarker} title="Location" size={1} />
            <p>{meeting.location}</p>
          </CardElement>
        </CardWrapper>
      </CardContent>
    </StyledCard>
  );
}

export default function MeetingsList({ meetingsList }) {
  return (
    <CardList>
      {meetingsList.map(meeting => {
        return <Card meeting={meeting} />;
      })}
    </CardList>
  );
}
