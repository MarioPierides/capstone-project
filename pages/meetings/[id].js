import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Title from '../../components/Title';
import MeetingDetails from '../../components/MeetingDetails';

function MeetingDetail() {
  const router = useRouter();
  const { query, isReady } = router;

  const [meeting, setMeeting] = useState();

  function getMeeting() {
    const fetchedMeetings = JSON.parse(localStorage.getItem('meetings'));

    if (!fetchedMeetings) {
      return;
    }

    const filteredMeeting = fetchedMeetings.find(foundMeeting => {
      return foundMeeting.id === query.id;
    });

    setMeeting(filteredMeeting);
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
      <MeetingDetails meeting={meeting} />
    </>
  );
}

export default MeetingDetail;
