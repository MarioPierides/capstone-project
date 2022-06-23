import Image from 'next/image';
import Icon from '@mdi/react';
import styled from 'styled-components';
import moment from 'moment-with-locales-es6';

import { mdiCalendar, mdiMapMarker } from '@mdi/js';
import { getLocationImageUrl } from '../utils/getLocationImageUrl';
import { capitalFirstLetter } from '../utils/capitalize';

function Card({ meeting }) {
  const url = getLocationImageUrl(meeting.location);

  return (
    <CardContent key={meeting.id}>
      {url && (
        <CardImage>
          <Image src={url} width={16} height={10} layout="responsive" />
        </CardImage>
      )}

      <CardTextWrapper>
        <CardTitle>{meeting.title}</CardTitle>
        <CardElement>
          <Icon path={mdiCalendar} title="Calendar" size={1} />
          <p>{moment(meeting.date).locale('de').format('LLL')}</p>
        </CardElement>
        <CardElement>
          <Icon path={mdiMapMarker} title="Location" size={1} />
          <p>{capitalFirstLetter(meeting.location)}</p>
        </CardElement>
      </CardTextWrapper>
    </CardContent>
  );
}

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

export default Card;
