import Image from 'next/image';
import Icon from '@mdi/react';
import styled from 'styled-components';

import { mdiCalendar, mdiMapMarker } from '@mdi/js';
import { useLocationImageUrl } from '../hooks/useLocationImageUrl';
import { capitalFirstLetter } from '../utils/capitalize';

function Card({ meeting }) {
  const url = useLocationImageUrl(meeting.location);

  return (
    <StyledCard key={meeting.id}>
      <CardContent>
        <CardImage>
          <Image src={url} width={16} height={10} layout="responsive" />
        </CardImage>
        <CardTextWrapper>
          <CardTitle>{meeting.title}</CardTitle>
          <CardElement>
            <Icon path={mdiCalendar} title="Calendar" size={1} />
            <p>{meeting.date}</p>
          </CardElement>
          <CardElement>
            <Icon path={mdiMapMarker} title="Location" size={1} />
            <p>{capitalFirstLetter(meeting.location)}</p>
          </CardElement>
        </CardTextWrapper>
      </CardContent>
    </StyledCard>
  );
}

export default Card;

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

const CardTextWrapper = styled.div`
  padding: 5px;
`;

const CardTitle = styled.h3`
  padding-bottom: 6px;
`;

const CardElement = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 2px;
  }
`;
