import { useState, useEffect } from 'react';
import Title from '../../components/Title';
import MeetingsList from '../../components/MeetingsList';

function Meetings() {
  const [meetings, setMeetings] = useState([]);

  function getMeetings() {
    const fetchedMeetings = JSON.parse(localStorage.getItem('meetings'));

    if (!fetchedMeetings) {
      return;
    }

    setMeetings(fetchedMeetings);
  }

  useEffect(() => {
    getMeetings();
  }, []);

  return (
    <>
      <Title>Treffen in deiner Nähe</Title>
      {meetings && <MeetingsList meetingsList={meetings} />}
    </>
  );
}

export default Meetings;
