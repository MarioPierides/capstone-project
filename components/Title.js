import styled from 'styled-components';

const Title = styled.h1`
  background-color: #158322;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-size: 20px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 8px;
  position: relative;
`;

export default Title;
