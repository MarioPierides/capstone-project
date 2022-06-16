import Image from 'next/image';
import styled from 'styled-components';

import logo from '../public/assets/images/logo.png';

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 6px 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo" width={60} height={54} />
    </StyledHeader>
  );
}
