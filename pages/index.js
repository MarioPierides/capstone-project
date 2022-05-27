import styled from 'styled-components';
import { useState } from 'react';
import StyledButton from '../components/Button';
import Title from '../components/Header';

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  function getAgeGroups(ageGroups) {
    return ageGroups
      .filter(age => age.checked)
      .map(age => age.dataset.displayname);
  }

  function handleSubmit(event) {
    //console.log(event);
    event.preventDefault();

    const form = event.target;

    const titel = form.titel.value;
    const location = form.location.value;
    const activity = form.activities.value;
    const altersgruppe = getAgeGroups([...form.altersgruppe]);

    console.log(altersgruppe);

    //console.log(event.target.elements);

    setMeetings(allPrevMeetings => [
      ...allPrevMeetings,
      { titel, location, activity, altersgruppe },
    ]);

    //console.log(titel);
    //console.log(location);
    //console.log(activity);
  }
  return (
    <>
      <Title>Erstelle dein Treffpunkt</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel</label>
          <input type="text" name="titel" placeholder="Titel" required />
        </div>
        <div>
          <label>Standorte</label>
          <select name="location">
            <option value="auswahl">Bitte auswählen</option>
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
                  name="altersgruppe"
                  id="welpen"
                  data-displayname="Welpen"
                />
              </div>
              <div>
                <label htmlFor="junghunde">Junghunde</label>
                <input
                  type="checkbox"
                  name="altersgruppe"
                  id="junghunde"
                  data-displayname="Junghunde"
                />
              </div>
              <div>
                <label htmlFor="erwachsen">Erwachsen</label>
                <input
                  type="checkbox"
                  name="altersgruppe"
                  id="erwachsen"
                  data-displayname="Erwachsen"
                />
              </div>
              <div>
                <label htmlFor="senior">Senior</label>
                <input
                  type="checkbox"
                  name="altersgruppe"
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
        {meetings.map((meeting, index) => {
          //console.log(meeting.altersgruppe);
          return (
            <li key={index}>
              <div>{meeting.titel}</div>
              <div>{meeting.location}</div>
              <div>{meeting.activity}</div>
              <ul>
                {meeting.altersgruppe.map(age => {
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
