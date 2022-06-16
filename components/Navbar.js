import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import { mdiHome, mdiViewList, mdiPlaylistPlus } from '@mdi/js';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const NavSideButton = styled.a`
  align-items: center;
  font-weight: bold;
  background-color: ${({ isActive }) => (isActive ? '#158322' : '#158322')};
  color: ${({ isActive }) => (isActive ? 'orange' : 'darkgray')};
  display: flex;
  height: 40px;
  text-decoration: none;
  justify-content: center;
  width: 40%;
  border-radius: 5px;
`;

const NavCenterButton = styled.a`
  align-items: center;
  font-weight: bold;
  background-color: ${({ isActive }) => (isActive ? 'orange' : '#158322')};
  color: ${({ isActive }) => (isActive ? 'white' : 'darkgray')};
  border-radius: 120px 120px 0 0;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
  width: 110px;
`;

export default function Navbar() {
  const router = useRouter();

  return (
    <StyledNav>
      <Link passHref href="/">
        <NavSideButton isActive={router.pathname === '/'}>
          <Icon path={mdiHome} title="Home" size={1} />
          <div>Home</div>
        </NavSideButton>
      </Link>
      <Link passHref href="/create-meeting">
        <NavCenterButton isActive={router.pathname === '/create-meeting'}>
          <Icon path={mdiPlaylistPlus} title="Erstelle ein Meeting" size={1} />
          <div>Meeting</div>
        </NavCenterButton>
      </Link>
      <Link passHref href="/meetings">
        <NavSideButton isActive={router.pathname === '/meetings'}>
          <Icon path={mdiViewList} title="Meetings" size={1} />
          <div>Meetings</div>
        </NavSideButton>
      </Link>
    </StyledNav>
  );
}
