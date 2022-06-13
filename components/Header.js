import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 40px 0;
`;

export default Title;
