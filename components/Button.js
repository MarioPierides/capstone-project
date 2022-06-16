import styled from 'styled-components';

const CreateAppointment = styled.button`
  min-width: 60px;
  min-height: 30px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: lightgray;
  background: linear-gradient(to top, #269d34, #11d325);
  cursor: pointer;
  color: white;

  &:hover {
    background: linear-gradient(to bottom, #269d34, #11d325);
  }
`;

export default CreateAppointment;
