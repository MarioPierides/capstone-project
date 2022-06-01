export default function Meetings({ meetings }) {
  return (
    <ul>
      {meetings.map(meeting => {
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
    </ul>
  );
}
