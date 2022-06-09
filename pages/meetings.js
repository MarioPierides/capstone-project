import { useState, useEffect } from 'react';
import Title from '../components/Header';
import Navbar from '../components/Navbar';
import MeetingsList from '../components/MeetingsList';


export default function Meetings() {
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
      <Title>Deine Meetings</Title>
      {meetings && <MeetingsList meetingsList={meetings} />}
      <Navbar />
    </>
  );
}
