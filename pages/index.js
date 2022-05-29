import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    const title = event.target.title.value;
    const location = event.target.locations.value;
    const activity = event.target.activities.value;

    setMeetings(prevState => [
      ...prevState,
      { title, location, activity, id: nanoid() },
    ]);
  }
  return (
    <>
      <Title>Erstelle dein Treffpunkt</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel</label>
          <input type="text" name="title" placeholder="Titel" required />
        </div>
        <div>
          <label>Standorte</label>
          <select name="locations">
            <option value="">Bitte auswählen</option>
            <option value="stadtpark">Stadtpark</option>
            <option value="elbe">Elbe</option>
            <option value="alster">Alster</option>
          </select>
        </div>
        <div>
          <label>Aktivitäten</label>
          <select name="activities">
            <option value="">Bitte auswählen</option>
            <option value="gassigehen">Gassi gehen</option>
            <option value="sport">Sport</option>
            <option value="otherthings">Sonstiges</option>
          </select>
        </div>

        <div>
          <button type="submit">Erstellen</button>
        </div>
      </form>

      <ul>
        {meetings.map(meeting => {
          return (
            <li key={meeting.id}>
              <p>{meeting.title}</p>
              <p>{meeting.location}</p>
              <p>{meeting.activity}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
