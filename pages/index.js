import styled from 'styled-components';
import { useState } from 'react';
import StyledButton from '../components/Button';
import Title from '../components/Header';
import { nanoid } from 'nanoid';

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  function getAgeGroup(ageGroup) {
    return ageGroup
      .filter(age => age.checked)
      .map(age => age.dataset.displayname);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const location = form.locations.value;
    const activity = form.activities.value;
    const ageGroup = getAgeGroup([...form.ageGroup]);

    setMeetings(allPrevMeetings => [
      ...allPrevMeetings,
      { title, location, activity, ageGroup, id: nanoid() },
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
            <option value="auswahl">Bitte auswählen</option>
            <option value="gassigehen">Gassi gehen</option>
            <option value="sport">Sport</option>
            <option value="otherthings">Sonstiges</option>
          </select>
        </div>
        <div>
          <div>
            <h4>Altersgruppe</h4>
            <div>
              <div>
                <label htmlFor="welpen">Welpen</label>
                <input
                  type="checkbox"
                  name="ageGroup"
                  id="welpen"
                  data-displayname="Welpen"
                />
              </div>
              <div>
                <label htmlFor="junghunde">Junghunde</label>
                <input
                  type="checkbox"
                  name="ageGroup"
                  id="junghunde"
                  data-displayname="Junghunde"
                />
              </div>
              <div>
                <label htmlFor="erwachsen">Erwachsen</label>
                <input
                  type="checkbox"
                  name="ageGroup"
                  id="erwachsen"
                  data-displayname="Erwachsen"
                />
              </div>
              <div>
                <label htmlFor="senior">Senior</label>
                <input
                  type="checkbox"
                  name="ageGroup"
                  id="senior"
                  data-displayname="Senior"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <StyledButton>ADD</StyledButton>
        </div>
      </form>

      <ul>
        {meetings.map(meeting => {
          return (
            <li key={meeting.id}>
              <p>{meeting.title}</p>
              <p>{meeting.location}</p>
              <p>{meeting.activity}</p>
              <ul>
                {meeting.ageGroup.map(age => {
                  return (
                    <li key={`${age}`}>
                      <div>{age}</div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
