import styled from 'styled-components';

const Title = styled.h1`
  display: flex;
  position: relative;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #158322;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default Title;
