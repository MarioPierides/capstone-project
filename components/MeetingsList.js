import styledComponents from 'styled-components';

const CardList = styledComponents.ul`
display: grid;
grid-gap: 20px;

`;

export default function MeetingsList({ meetingsList }) {
  return (
    <CardList style={{ margin: '0', padding: '0' }}>
      {meetingsList.map(meeting => {
        return (
          <li key={meeting.id}>
            <p>{meeting.title}</p>
            <p>{meeting.location}</p>
            <p>{meeting.activity}</p>
            <ul>
              {meeting.ageGroup.map(ageElement => {
                return (
                  <li key={ageElement}>
                    <p>{ageElement}</p>
                  </li>
                );
              })}
            </ul>
            <p>{meeting.calendar}</p>
            <p>{meeting.description}</p>
          </li>
        );
      })}
    </CardList>
  );
}
