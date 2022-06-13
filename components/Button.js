import styled from 'styled-components';

const CreateAppointment = styled.button`
  min-width: 60px;
  min-height: 30px;
  padding: 10px;
  border: 2px solid green;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: black;
    background: lightgreen;
  }
`;

export default CreateAppointment;
