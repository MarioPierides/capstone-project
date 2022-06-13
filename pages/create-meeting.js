import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { today } from '../utils/date';
import { getAgeGroup } from '../utils/extract';

import CreateAppointment from '../components/Button';
import Title from '../components/Header';

export default function FormPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');


  function handleTitleChange(event) {
    const newTitle = event.target.value.trimStart();

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
    const date = form.date.value;


    const newMeeting = {
      title,
      location,
      activity,
      ageGroup,
      description,
      date,
      id: nanoid(),
    };

    updateLocalStorage(newMeeting);
    router.push('/meetings');
  }
  function updateLocalStorage(newMeeting) {

    const allMeetings = JSON.parse(localStorage.getItem('meetings')) || [];

    allMeetings.push(newMeeting);

    localStorage.setItem('meetings', JSON.stringify(allMeetings));
  }
  return (
    <>
      <Title>Stelle jetzt dein Treffen ein!</Title>

      <form onSubmit={handleSubmit}>
        <section>
          <FormElement>
            <input
              type="text"
              name="title"
              maxLength={30}
              placeholder="Titel"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </FormElement>
          <FormElement>
            <select name="locations" required>
              <option value="">Standort auswählen</option>
              <option value="stadtpark">Stadtpark</option>
              <option value="elbe">Elbe</option>
              <option value="alster">Alster</option>
            </select>
          </FormElement>
          <FormElement>
            <select name="activities" required>
              <option value="">Aktivitäten wählen</option>
              <option value="gassigehen">Gassi gehen</option>
              <option value="sport">Sport</option>
              <option value="otherthings">Sonstiges</option>
            </select>
          </FormElement>
        </section>
        <section>
          <h4>Altersgruppe</h4>
          <FormElement>
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
          </FormElement>
        </section>
        <section>
          <FormElement>
            <textarea
              name="description"
              maxLength={300}
              rows="4"
              cols="40"
              placeholder="Text - Beschreibung"
            />
          </FormElement>
        </section>
        <section>
          <FormElement>
            <label>Kalender:</label>
            <br></br>
            <input type="date" name="date" min={today} required />
          </FormElement>
        </section>

        <section>
          <div>
            <CreateAppointment>Hinzufügen</CreateAppointment>
          </div>
        </section>
      </form>
    </>
  );
}

const FormElement = styled.div`
  margin-bottom: 15px;
`;
