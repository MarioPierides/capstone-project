import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment-with-locales-es6';
import Image from 'next/image';
import styled from 'styled-components';
import Icon from '@mdi/react';
import {
  mdiCalendar,
  mdiMapMarker,
  mdiDogService,
  mdiAccountDetails,
  mdiDog,
} from '@mdi/js';

import { useLocationImageUrl } from '../../hooks/useLocationImageUrl';
import { capitalFirstLetter } from '../../utils/capitalize';

import Title from '../../components/Title';

function MeetingDetail() {
  const router = useRouter();
  const { query, isReady } = router;

  const [meeting, setMeeting] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getMeeting() {
    const fetchedMeetings = JSON.parse(localStorage.getItem('meetings'));

    if (!fetchedMeetings) {
      return;
    }

    const filteredMeeting = fetchedMeetings.find(foundMeeting => {
      return foundMeeting.id === query.id;
    });

    const url = useLocationImageUrl(filteredMeeting.location);

    setMeeting(filteredMeeting);
    setImageUrl(url);
  }

  useEffect(() => {
    if (!isReady) {
      return;
    }

    getMeeting();
  }, [isReady]);

  return (
    <>
      <Title>Meeting Detail Seite</Title>
      {meeting && (
        <CardContent key={meeting.id}>
          {imageUrl && (
            <CardImage>
              <Image
                src={imageUrl}
                width={16}
                height={10}
                layout="responsive"
              />
            </CardImage>
          )}

          <CardTextWrapper>
            <CardTitle>{meeting.title}</CardTitle>
            <CardElement>
              <Icon path={mdiDog} size={1} />
              <p>{capitalFirstLetter(meeting.ageGroup)}</p>
            </CardElement>
            <CardElement>
              <Icon path={mdiDogService} size={1} />
              <p>{capitalFirstLetter(meeting.activity)}</p>
            </CardElement>
            <CardElement>
              <Icon path={mdiAccountDetails} size={1} />
              <p>{meeting.description}</p>
            </CardElement>
            <CardElement>
              <Icon path={mdiCalendar} size={1} />
              <p>{moment(meeting.date).locale('de').format('LLL')}</p>
            </CardElement>
            <CardElement>
              <Icon path={mdiMapMarker} size={1} />
              <p>{capitalFirstLetter(meeting.location)}</p>
            </CardElement>
          </CardTextWrapper>
        </CardContent>
      )}
    </>
  );
}

export default MeetingDetail;

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
