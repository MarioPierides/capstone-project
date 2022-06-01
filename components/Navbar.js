import styledComponents from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <StyledLinkNav>Erstelle</StyledLinkNav>
      </Link>

      <Link passHref href="/meetings">
        <StyledLinkNav>Liste</StyledLinkNav>
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styledComponents.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
  z-index: 0;
`;

const StyledLinkNav = styledComponents.a`
  color: black;
  background-color: grey;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  width: 150px;
`;
