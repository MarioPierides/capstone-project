import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 60px;
  min-height: 30px;
  padding: 10px;
  border: 2px solid red;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    color: red;
    background: yellow;
  }
`;

export default StyledButton;
