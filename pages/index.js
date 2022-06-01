import { useState } from 'react';
import { nanoid } from 'nanoid';
import StyledButton from '../components/Button';
import Title from '../components/Header';
import { today } from '../utils/date';
import { getAgeGroup } from '../utils/extract';
import Meetings from '../components/Meetings';

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  const [title, setTitle] = useState('');
  function handleTitleChange(event) {
    const newTitle = event.target.value.trimStart();
    console.log(newTitle);
    setTitle(newTitle);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value.trimEnd();
    const location = form.locations.value;
    const activity = form.activities.value;
    const ageGroup = getAgeGroup([...form.ageGroup]);
    const description = form.description.value;
    const calendar = form.calendar.value;

    setMeetings(allPrevMeetings => [
      ...allPrevMeetings,
      {
        title,
        location,
        activity,
        ageGroup,
        description,
        calendar,
        id: nanoid(),
      },
    ]);
  }
  return (
    <>
      <Title>Erstelle deinen Treffpunkt</Title>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label>Titel</label>
            <input
              type="text"
              name="title"
              placeholder="Titel"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label>Standorte</label>
            <select name="locations" required>
              <option value="">Bitte auswählen</option>
              <option value="stadtpark">Stadtpark</option>
              <option value="elbe">Elbe</option>
              <option value="alster">Alster</option>
            </select>
          </div>
          <div>
            <label>Aktivitäten</label>
            <select name="activities" required>
              <option value="">Bitte auswählen</option>
              <option value="gassigehen">Gassi gehen</option>
              <option value="sport">Sport</option>
              <option value="otherthings">Sonstiges</option>
            </select>
          </div>
        </section>
        <section>
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
        </section>
        <section>
          <div>
            <label htmlFor="description">Beschreibung</label>
            <textarea
              name="description"
              rows="4"
              cols="50"
              placeholder="Text - Beschreibung"
            />
          </div>
        </section>
        <section>
          <div>
            <label>Kalender</label>
            <input type="date" name="calendar" min={today} required />
          </div>
        </section>

        <section>
          <div>
            <StyledButton>ADD</StyledButton>
          </div>
        </section>
      </form>
      <Meetings meetings={meetings} />
    </>
  );
}
