import styledComponents, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <StyledLinkNav isActive={router.pathname === '/'}>Home</StyledLinkNav>
      </Link>

      <Link passHref href="/form">
        <StyledLinkNav isActive={router.pathname === '/form'}>
          Erstelle
        </StyledLinkNav>
      </Link>

      <Link passHref href="/meetings">
        <StyledLinkNav isActive={router.pathname === '/meetings'}>
          Liste
        </StyledLinkNav>
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styledComponents.nav`

${({ theme }) => css`
  background-color: ${theme.colors.background};
`}
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  border-radius: 20px;
  height: 50px;
`;

const StyledLinkNav = styledComponents.a`

  color: ${({ isActive }) => (isActive ? 'black' : 'grey')};
  box-shadow: ${({ isActive }) => (isActive ? '5px 3px 5px black' : 'none')};
  
  background-color: whitesmoke;
  font-size: 17px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid transparent;
  width: 125px;
`;
